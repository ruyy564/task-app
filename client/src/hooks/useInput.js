import { useState } from 'react';

const useInput = (initValue = '') => {
  const [value, setValue] = useState(initValue);

  const changeHandler = (event) => {
    setValue(event.target.value);
  };

  const clear = () => {
    setValue('');
  };
  return { value, changeHandler, setValue, clear };
};

export default useInput;
