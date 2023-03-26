import { createSlice } from '@reduxjs/toolkit';

import { signIn, logout } from '../../../services/user';
import { STATUS } from '../../../constants';

const user = localStorage.getItem('user');

const initialState = {
  user: user ? JSON.parse(user) : null,
  auth: Boolean(user),
  status: null,
  errorMessage: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signIn.fulfilled, (state, { payload }) => {
        state.status = null;
        state.errorMessage = null;
        state.user = payload;
        state.auth = true;
      })
      .addCase(signIn.pending, (state) => {
        state.status = STATUS.loading;
        state.errorMessage = null;
      })
      .addCase(signIn.rejected, (state, { payload }) => {
        state.status = STATUS.error;
        state.errorMessage = payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.auth = false;
      });
  },
});

export default userSlice.reducer;
