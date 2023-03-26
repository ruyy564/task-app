import { createAsyncThunk } from '@reduxjs/toolkit';
import $api from '../http';

export const fetchTasks = createAsyncThunk(
  'task/fetchTasks',
  async ({ page, limit, sortedBy, direction }, thunkAPI) => {
    try {
      const { data } = await $api.get(`/tasks`, {
        params: {
          page,
          limit,
          sortedBy,
          direction,
        },
      });

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response?.data.message);
    }
  }
);

export const addTask = createAsyncThunk(
  'task/addTask',
  async ({ email, name, text }, thunkAPI) => {
    try {
      const { data } = await $api.post(`/tasks`, {
        email,
        name,
        text,
      });

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response?.data.message);
    }
  }
);

export const updateTask = createAsyncThunk(
  'task/updateTask',
  async ({ uuid, email, name, text, isComplited }, thunkAPI) => {
    try {
      const { data } = await $api.put(`/tasks/${uuid}`, {
        uuid,
        email,
        name,
        text,
        isComplited,
      });

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response?.data.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  'task/deleteTask',
  async ({ uuid }, thunkAPI) => {
    try {
      await $api.delete(`/tasks/${uuid}`);

      return uuid;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response?.data.message);
    }
  }
);
