import { createAsyncThunk } from '@reduxjs/toolkit';
import $api from '../http';

export const signIn = createAsyncThunk(
  'user/login',
  async ({ login, password }, thunkAPI) => {
    try {
      const { data } = await $api.post('/users/login', {
        login,
        password,
      });

      localStorage.setItem('token', data.accessToken);
      localStorage.setItem('user', JSON.stringify(data.user));

      return data.user;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response?.data);
    }
  }
);

export const logout = createAsyncThunk('user/logout', async () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
});
