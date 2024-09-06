import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Form from "../../components/Form/index.tsx";
import CustomInput from "../../components/UI/CustomInput/index.tsx";
import Header from "../../components/Header/index.tsx";
import useFocus from "../../hooks/autoFocus.ts";
import useAction from "../../hooks/useAction.ts";
import { validateString } from "../../helpers/validate-string.ts";
import { IUserState, IErrorInputState } from "./interface.ts";
import { RootState } from "../../store/reducers/index.ts";

const RegistrationPage: React.FC = () => {
  const [user, setUser] = useState<IUserState>({
    login: "",
    password: "",
    repeatPassword: "",
  });
  const [inputError, setInputError] = useState<IErrorInputState>({
    login: "",
    password: "",
    repeatPassword: "",
  });
  const [isOpenSnackbar, setIsOpenSnackbar] = useState<boolean>(false);
  const { addNewUser } = useAction();
  const focusInput = useFocus();
  const error = useSelector((state: RootState) => state.user.error);

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

  const validateRegistration = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { login, password, repeatPassword } = user;

    if (!validateString(login)) {
      setInputError({
        ...inputError,
        login: "Поле не может содержать меньше 6 символов или меньше 1 цифры",
      });

      return;
    }

    if (!validateString(password)) {
      setInputError({
        ...inputError,
        password:
          "Поле не может содержать меньше 6 символов или меньше 1 цифры",
      });

      return;
    }

    if (!validateString(repeatPassword)) {
      setInputError({
        ...inputError,
        repeatPassword:
          "Поле не может содержать меньше 6 символов или меньше 1 цифры",
      });

      return;
    }

    addNewUser(user);
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
      <Header title="Зарегистрироваться в системе" />
      <Form
        title="Регистрация"
        handleSubmit={validateRegistration}
        handleChangeInput={handleChangeInput}
        buttonTitle="Зарегистрироваться"
        linkTitle="Авторизоваться"
        path="/login"
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
        <CustomInput
          label="Повторите пароль:"
          placeholder="Пароль"
          typeInput="password"
          nameInput="repeatPassword"
          valueInput={user.repeatPassword}
          handleChangeInput={handleChangeInput}
          error={inputError.repeatPassword}
        />
      </Form>
    </div>
  );
};

export default RegistrationPage;
