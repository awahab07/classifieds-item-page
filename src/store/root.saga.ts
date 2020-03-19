import { all, fork } from 'redux-saga/effects';
import { vipListener } from '../features/vip';

export const rootSaga = function* root(): Generator {
  yield all([fork(vipListener)]);
};
