import { createSlice } from '@reduxjs/toolkit';

import { signIn, logout } from '../../../services/user';
import { STATUS } from '../../../constants';

const user = localStorage.getItem('user');

const initialState = {
  user: user ? JSON.parse(user) : null,
  auth: Boolean(user),
  status: null,
  errorMessage: null,
  errors: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetStatus(state) {
      state.status = null;
      state.errorMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.fulfilled, (state, { payload }) => {
        state.status = STATUS.success;
        state.errorMessage = null;
        state.user = payload;
        state.auth = true;
        state.errors = null;
      })
      .addCase(signIn.pending, (state) => {
        state.status = STATUS.loading;
        state.errorMessage = null;
        state.errors = null;
      })
      .addCase(signIn.rejected, (state, { payload }) => {
        state.status = STATUS.error;
        state.errorMessage = payload.message;
        state.errors = payload.errors;
      })
      .addCase(logout.fulfilled, (state) => {
        state.status = null;
        state.errorMessage = null;
        state.user = null;
        state.auth = false;
        state.errors = null;
      });
  },
});

export const { resetStatus } = userSlice.actions;
export default userSlice.reducer;
