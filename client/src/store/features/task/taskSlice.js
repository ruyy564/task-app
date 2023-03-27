import { createSlice } from '@reduxjs/toolkit';

import {
  fetchTasks,
  addTask,
  deleteTask,
  updateTask,
} from '../../../services/task';
import { STATUS } from '../../../constants';

const initialState = {
  tasks: null,
  count: 0,
  status: null,
  errorMessage: null,
};

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    resetStatus(state) {
      state.status = null;
      state.errorMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.fulfilled, (state, { payload }) => {
        state.status = STATUS.success;
        state.errorMessage = null;
        state.tasks = payload.rows;
        state.count = payload.count;
      })
      .addCase(fetchTasks.pending, (state) => {
        state.status = STATUS.loading;
        state.errorMessage = null;
      })
      .addCase(fetchTasks.rejected, (state, { payload }) => {
        state.status = STATUS.error;
        state.errorMessage = payload;
      })
      .addCase(addTask.fulfilled, (state, { payload }) => {
        state.status = STATUS.success;
        state.errorMessage = null;
        state.count += 1;
      })
      .addCase(addTask.pending, (state) => {
        state.status = STATUS.loading;
        state.errorMessage = null;
      })
      .addCase(addTask.rejected, (state, { payload }) => {
        state.status = STATUS.error;
        state.errorMessage = payload;
      })
      .addCase(updateTask.fulfilled, (state, { payload }) => {
        state.status = STATUS.success;
        state.errorMessage = null;
        const task = state.tasks.find((el) => el.uuid === payload.uuid);
        task.email = payload.email;
        task.text = payload.text;
        task.isComplited = payload.isComplited;
        task.isUpdated = payload.isUpdated;
        task.name = payload.name;
      })
      .addCase(updateTask.pending, (state) => {
        state.status = STATUS.loading;
        state.errorMessage = null;
      })
      .addCase(updateTask.rejected, (state, { payload }) => {
        state.status = STATUS.error;
        state.errorMessage = payload;
      })
      .addCase(deleteTask.fulfilled, (state, { payload }) => {
        state.status = null;
        state.errorMessage = null;
        state.count -= 1;
      })
      .addCase(deleteTask.pending, (state) => {
        state.status = STATUS.loading;
        state.errorMessage = null;
      })
      .addCase(deleteTask.rejected, (state, { payload }) => {
        state.status = STATUS.error;
        state.errorMessage = payload;
      });
  },
});

export const { resetStatus } = taskSlice.actions;
export default taskSlice.reducer;
