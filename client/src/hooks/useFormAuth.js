import useInput from './useInput';

const useFormAuth = (signIn) => {
  const login = useInput();
  const password = useInput();

  const clickHandler = () => {
    signIn(login.value, password.value);
  };

  return { login, password, clickHandler };
};

export default useFormAuth;
