import React from 'react';
import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export function ButtonEdit({ onClick }) {
  return (
    <Button title={'Edit'} onClick={onClick} size="small">
      <EditIcon />
    </Button>
  );
}

export function ButtonDelete({ onClick }) {
  return (
    <Button title={'Delete'} color="error" onClick={onClick} size="small">
      <DeleteIcon />
    </Button>
  );
}
