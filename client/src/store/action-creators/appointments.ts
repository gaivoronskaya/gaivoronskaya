import { Dispatch } from "redux";
import { IAppointments } from "../interfaces/IAppointments";
import { AppointmentsActionTypes } from "../actions/type";
import {
  startGetAppointments,
  successGetAppointments,
  errorGetAppointments,
} from "../actions/appointments.ts";
import { getAppointments } from "../../services/appointments.ts";

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
