export interface IUserState {
  login: string;
  password: string;
  repeatPassword?: string;
}

export interface IHeaderContext {
  title: string;
}

export interface IAppointmentsState {
  name: string;
  doctor: string;
  date: string;
  complaint: string;
}