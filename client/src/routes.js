import { createBrowserRouter, Navigate } from 'react-router-dom';

import AuthPage from './pages/AuthPage';
import TaskPage from './containers/TaskPageContainer';

export const privateRouter = createBrowserRouter([
  {
    path: '/',
    element: <TaskPage />,
  },
  {
    path: '*',
    element: <Navigate to="/" />,
  },
]);

export const publicRouter = createBrowserRouter([
  {
    path: '/',
    element: <TaskPage />,
  },
  {
    path: '/login',
    element: <AuthPage />,
  },
  {
    path: '*',
    element: <Navigate to="/" />,
  },
]);
