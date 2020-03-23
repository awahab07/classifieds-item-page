import MOCK_VIP from '../../../../data/vip.json';
import reducer, { actions, initialState } from './reducer';

const MOCK_ERROR = '[400] Error fetching data';

describe('Vip reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {} as any)).toEqual(initialState);
  });

  it('should set loading to true', () => {
    expect(reducer(undefined, actions.getVip())).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it('should handle actions.getVipSuccess', () => {
    expect(reducer(initialState, actions.getVipSuccess({ vip: MOCK_VIP as any }))).toEqual({
      vip: MOCK_VIP,
      loading: false,
      error: null,
    });
  });

  it('should set error on actions.getVipFailure', () => {
    expect(reducer(initialState, actions.getVipFailure(MOCK_ERROR))).toEqual({
      vip: null,
      loading: false,
      error: MOCK_ERROR,
    });
  });
});
