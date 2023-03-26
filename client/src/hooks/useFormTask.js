import { useEffect, useState } from 'react';
import useInput from '../hooks/useInput';

const useFormTask = (handleClose, initState, addTask, updateTask) => {
  const [editId, setEditId] = useState(null);
  const email = useInput();
  const name = useInput();
  const text = useInput();

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

  const saveContact = () => {
    if (editId) {
      updateTask(editId, email.value, name.value, text.value);
    } else {
      addTask(email.value, name.value, text.value);
    }
  };

  return {
    closeForm,
    name,
    email,
    text,
    saveContact,
  };
};

export default useFormTask;
