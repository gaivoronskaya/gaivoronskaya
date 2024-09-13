import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import useAction from "../../hooks/useAction";
import Header from "../../components/Header";
import TableAppointment from "../../components/TableAppointment";
import AddingAppointmentForm from "../../components/AddingAppointmentForm";
import { HeaderProvider } from "../../Provider";
import { IAppointmentsState } from "../../interfaces";
import { IAppointmentsStore } from "../../store/reducers/interfaces";
import { StyledButtonExit } from "./style";

const MainPage = () => {
  const [appointment, setAppointment] = useState<IAppointmentsState>({
    name: "",
    doctor: "",
    date: "",
    complaint: "",
  });
  const [inputError, setInputError] = useState<IAppointmentsState>({
    name: "",
    doctor: "",
    date: "",
    complaint: "",
  });

  const [isOpenSnackbar, setIsOpenSnackbar] = useState(false);

  const {
    getUserAppointments,
  } = useAction();

  const appointments = useSelector((state: IAppointmentsStore) => state.appointments.appointments);
  const error = useSelector((state: IAppointmentsStore) => state.error);

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
