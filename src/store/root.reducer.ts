import { combineReducers } from '@reduxjs/toolkit';

import { vipReducer } from '../features/vip';

const rootReducer = combineReducers({
  vip: vipReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
