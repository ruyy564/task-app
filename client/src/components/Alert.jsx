import React, { useEffect } from 'react';
import { Alert } from '@mui/material';

import { STATUS } from '../constants';

function Atert({ text, status, resetStatusUser, resetStatusTask }) {
  useEffect(() => {
    if (status === STATUS.error || status === STATUS.success) {
      setTimeout(() => {
        resetStatusUser();
        resetStatusTask();
      }, 2000);
    }
  }, [resetStatusTask, resetStatusUser, status]);

  if (status !== STATUS.error && status !== STATUS.success) {
    return null;
  }

  return <Alert severity={status}>{text}</Alert>;
}

export default Atert;
