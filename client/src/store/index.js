import { configureStore } from '@reduxjs/toolkit';

import userReducer from './features/user/userSlice';
import taskReducer from './features/task/taskSlice';
import { interceptor } from '../http';

const reducer = {
  user: userReducer,
  task: taskReducer,
};

export const store = configureStore({
  reducer,
});

interceptor(store);
