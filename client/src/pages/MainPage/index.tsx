import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import useAction from "../../hooks/useAction.ts";
import Header from "../../components/Header/index.tsx";
import TableAppointment from "../../components/TableAppointment/index.tsx";
import AddingAppointmentForm from "../../components/AddingAppointmentForm/index.tsx";
import { HeaderProvider } from "../../Provider/index.tsx";
import { IAppointmentsState, IErrorInputState } from "../../interfaces/index.ts";
import { RootState } from "../../store/reducers/index.ts";
import { StyledButtonExit } from "./style.ts";

const MainPage = () => {
  const [appointment, setAppointment] = useState<IAppointmentsState>({
    name: "",
    doctor: "",
    date: "",
    complaint: "",
  });
  const [inputError, setInputError] = useState<IErrorInputState>({
    name: "",
    doctor: "",
    date: "",
    complaint: "",
  });

  const [isOpenSnackbar, setIsOpenSnackbar] = useState(false);

  const {
    getUserAppointments,
  } = useAction();

  const appointments = useSelector((state: RootState) => state.appointments.appointments);
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

  useEffect(() => {
    getUserAppointments();
  }, []);

  const validateAppointments = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { name, doctor, date, complaint } = appointment;
    const currentDate = new Date();

    if (!name.trim()) {
      setInputError({
        ...inputError,
        name: "Поле не может быть пустым",
      });

      return;
    }

    if (!doctor.trim()) {
      setInputError({
        ...inputError,
        doctor: "Поле не может быть пустым",
      });

      return;
    }

    if (!date.trim() || new Date(date) < currentDate) {
      setInputError({
        ...inputError,
        date: "Поле не может быть пустым или содержать прошлое время",
      });

      return;
    }

    if (!complaint.trim()) {
      setInputError({
        ...inputError,
        complaint: "Поле не может быть пустым",
      });

      return;
    }
  };

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;

    setAppointment((prevInfo) => ({
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
        <Header>
          <StyledButtonExit>Выход</StyledButtonExit>
        </Header>
      </HeaderProvider>
      <AddingAppointmentForm
        handleChangeInput={handleChangeInput}
        handleChangeSelector={handleChangeInput}
        appointment={appointment}
        error={inputError}
        handleSubmit={validateAppointments}
      />
      <TableAppointment
        appointments={appointments}
      />
    </div>
  );
};

export default MainPage;
