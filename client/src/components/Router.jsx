import React from 'react';
import { RouterProvider } from 'react-router-dom';

import { publicRouter, privateRouter } from '../routes';

function Router({ auth }) {
  const router = auth ? privateRouter : publicRouter;

  return <RouterProvider router={router} />;
}

export default Router;
