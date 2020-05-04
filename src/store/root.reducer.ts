import { combineReducers } from '@reduxjs/toolkit';

import { vipReducer } from '../features/vip';

const rootReducer = combineReducers({
  vipSlice: vipReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
