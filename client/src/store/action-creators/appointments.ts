import { Dispatch } from "redux";
import { IAppointments } from "../interfaces/IAppointments";
import { AppointmentsActionTypes } from "../actions/type";
import {
  startGetAppointments,
  successGetAppointments,
  errorGetAppointments,
  startCreateAppointments,
  successCreateAppointments,
  errorCreateAppointments,
} from "../actions/appointments";
import {
  getAppointments,
  createNewAppointments,
} from "../../services/appointments";

export const getUserAppointments = () => {
  return async (dispatch: Dispatch<AppointmentsActionTypes>) => {
    try {
      dispatch(startGetAppointments());
      const appointmentList = await getAppointments();

      dispatch(successGetAppointments(appointmentList));
    } catch (error) {
      const errorText = error.response
        ? error.response.data.message
        : error.message;
      dispatch(errorGetAppointments(errorText));
    }
  };
};

export const createAppointments = (appointmentData) => {
  return async (dispatch: Dispatch<AppointmentsActionTypes>) => {
    try {
      dispatch(startCreateAppointments());
      const newAppointment = await createNewAppointments(appointmentData);

      dispatch(successCreateAppointments(newAppointment));
    } catch (error) {
      const errorText = error.response
        ? error.response.data.message
        : error.message;
      dispatch(errorCreateAppointments(errorText));
    }
  };
};
