import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IVip } from '../../../models/Vip';

export const vipSliceName = 'vip';

interface IVipState {
  vip: IVip | null;
  loading: boolean;
  error?: string | null;
}

export const initialState: IVipState = {
  vip: null,
  loading: false,
  error: null,
};

const slice = createSlice({
  name: vipSliceName,
  initialState,
  reducers: {
    getVip: (state: IVipState): void => {
      state.loading = true;
      state.error = null;
    },
    getVipSuccess: (
      state: IVipState,
      action: PayloadAction<{ vip: IVip }>
    ): void => {
      const { vip } = action.payload;
      state.vip = vip;
      state.loading = false;
      state.error = null;
    },
    getVipFailure: (state: IVipState, action: PayloadAction<string>): void => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { actions } = slice;
export default slice.reducer;
