import appointmentsEnums from "../enums/appointments";
import { IAppointment } from "../interfaces/IUser";
import {
  StartGetAppointments ,
  SuccessGetAppointments,
  ErrorGetAppointments,
  StartCreateAppointments,
  SuccessCreateAppointments,
  ErrorCreateAppointments,
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

export const startCreateAppointments = (): StartCreateAppointments => ({
  type: appointmentsEnums.CREATE_APPOINTMENT,
}) 

export const successCreateAppointments = (payload: IAppointment[]): SuccessCreateAppointments => ({
  type: appointmentsEnums.CREATE_APPOINTMENT_SUCCESS,
  payload,
})

export const errorCreateAppointments = (error: string): ErrorCreateAppointments => ({
  type: appointmentsEnums.CREATE_APPOINTMENT_ERROR,
  error,
})