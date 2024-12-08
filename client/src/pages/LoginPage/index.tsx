import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Form from "../../components/Form";
import CustomInput from "../../components/UI/CustomInput";
import Header from "../../components/Header";
import useFocus from "../../hooks/autoFocus";
import useAction from "../../hooks/useAction";
import { HeaderProvider } from "../../Provider";
import { IUserState } from "../../interfaces";
import { IUserStore } from "../../store/reducers/interfaces";

const LoginPage = () => {
  const [user, setUser] = useState<IUserState>({
    login: "",
    password: "",
  });
  const [inputError, setInputError] = useState<IUserState>({
    login: "",
    password: "",
  });
  const [isOpenSnackbar, setIsOpenSnackbar] = useState<boolean>(false);
  const error = useSelector((state: IUserStore) => state.error);
  const focusInput = useFocus();
  const { loginUserAction } = useAction();

  useEffect(() => {
    if (error) {
      setIsOpenSnackbar(true);
    }
  }, [error]);

  const handleCloseSnackbar = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
  };

  const validateLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { login, password } = user;

    if (!login.trim() || !password.trim()) {
      setInputError({
        login: !login ? "Поле не может быть пустым" : "",
        password: !password ? "Поле не может быть пустым" : "",
      });

      return;
    }
    loginUserAction(user);
  };

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setUser((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  return (
    <div>
      <Snackbar
        open={isOpenSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="error">
          {error}
        </Alert>
      </Snackbar>
      <HeaderProvider>
        <Header />
      </HeaderProvider>
      <Form
        title="Вход"
        handleSubmit={validateLogin}
        handleChangeInput={handleChangeInput}
        buttonTitle="Войти"
        linkTitle="Зарегистрироваться"
        path="/registration"
      >
        <CustomInput
          label="Логин:"
          placeholder="Логин"
          typeInput="text"
          nameInput="login"
          valueInput={user.login}
          handleChangeInput={handleChangeInput}
          error={inputError.login}
          inputRef={focusInput}
        />
        <CustomInput
          label="Пароль:"
          placeholder="Пароль"
          typeInput="password"
          nameInput="password"
          valueInput={user.password}
          handleChangeInput={handleChangeInput}
          error={inputError.password}
        />
      </Form>
    </div>
  );
};

export default LoginPage;
