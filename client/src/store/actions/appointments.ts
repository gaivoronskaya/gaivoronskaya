import appointmentsEnums from "../enums/appointments.ts";
import { IAppointment } from "../interfaces/IUser.ts";
import {
  StartGetAppointments ,
  SuccessGetAppointments,
  ErrorGetAppointments,
} from "./interfaces";

export const startGetAppointments = (): StartGetAppointments  => ({
  type: appointmentsEnums.GET_APPOINTMENT,
})

export const successGetAppointments = (payload: IAppointment[]): SuccessGetAppointments => ({
type: appointmentsEnums.GET_APPOINTMENT_SUCCESS,
payload,
})

export const errorGetAppointments = (error: string): ErrorGetAppointments =>({
  type: appointmentsEnums.GET_APPOINTMENT_ERROR,
  error,
})