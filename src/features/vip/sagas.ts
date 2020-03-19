import { Action } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import * as vipApi from '../../api/vip.api';
import { IVip } from '../../models/Vip';
import { actions } from './reducer';

function* fetchVip(action: Action): Generator {
  try {
    if (actions.getVip.match(action)) {
      const fetchedVip = yield call(vipApi.getVip);
      yield put(actions.getVipSuccess({vip: fetchedVip as IVip}));
    }
  } catch (e) {
    yield put(actions.getVipFailure(e.message));
  }
}

function* listener(): Generator {
  yield takeLatest(actions.getVip.type, fetchVip);
}

export default listener;
