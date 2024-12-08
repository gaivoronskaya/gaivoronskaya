import { Dispatch } from "redux";
import { IAppointments } from "../interfaces/IAppointments";
import { AppointmentsActionTypes } from "../actions/type";
import {
  startGetAppointments,
  successGetAppointments,
  errorGetAppointments,
} from "../actions/appointments";
import { getAppointments } from "../../services/appointments";

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
