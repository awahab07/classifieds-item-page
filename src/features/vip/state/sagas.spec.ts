import { Action } from '@reduxjs/toolkit';
import { runSaga } from 'redux-saga';
import MOCK_VIP from '../../../../data/vip.json';
import * as api from '../../../api/vip.api';

import { actions } from './reducer';

import { fetchVip } from './sagas';

const MOCK_ERROR = '[400] Error fetching data';

describe('fetchVip', () => {
  it('should call api and dispatch success action', async () => {
    const requestVip = jest.spyOn(api, 'getVip')
      .mockImplementation(() => Promise.resolve(MOCK_VIP as any));
    const dispatched: Action[] = [];
    const result = await runSaga({
      dispatch: (action: Action) => dispatched.push(action),
    }, fetchVip, actions.getVip());

    expect(requestVip).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([actions.getVipSuccess({vip: MOCK_VIP as any})]);
    requestVip.mockClear();
  });

  it('should call api and dispatch error action', async () => {
    const requestVip = jest.spyOn(api, 'getVip')
      .mockImplementation(() => Promise.reject({message: MOCK_ERROR}));
    const dispatched: Action[] = [];
    const result = await runSaga({
      dispatch: (action: Action) => dispatched.push(action),
    }, fetchVip, actions.getVip());

    expect(requestVip).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([actions.getVipFailure(MOCK_ERROR)]);
    requestVip.mockClear();
  });
});
