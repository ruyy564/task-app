import { useEffect, useState } from 'react';

import useInput from '../hooks/useInput';
import { STATUS } from '../constants';

const useFormTask = (
  handleClose,
  initState,
  addTask,
  updateTask,
  status,
  errorMessage
) => {
  const [editId, setEditId] = useState(null);
  const email = useInput();
  const name = useInput();
  const text = useInput();
  let textAlert = '';

  if (status === STATUS.error) {
    textAlert = errorMessage;
  }

  if (status === STATUS.success) {
    textAlert = initState?.uuid ? 'Изменения сохранены' : 'Задача добавлена';
  }
  useEffect(() => {
    if (initState) {
      setEditId(initState.uuid);
      email.setValue(initState.email);
      name.setValue(initState.name);
      text.setValue(initState.text || '');
    } else {
      setEditId(null);
    }
  }, [initState]);

  const closeForm = () => {
    handleClose();
    email.clear();
    name.clear();
    text.clear();
  };

  const saveTask = () => {
    if (editId) {
      updateTask(editId, email.value, name.value, text.value);
    } else {
      addTask(email.value, name.value, text.value);
    }
  };

  return {
    closeForm,
    textAlert,
    name,
    email,
    text,
    saveTask,
  };
};

export default useFormTask;
