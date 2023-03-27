import React from 'react';
import { Typography } from '@mui/material';

function Text({ text, color = 'text.secondary' }) {
  return (
    <Typography
      sx={{ fontSize: 14, width: '100%', wordWrap: 'break-word' }}
      color={color}
      gutterBottom
    >
      {text}
    </Typography>
  );
}

export default Text;
