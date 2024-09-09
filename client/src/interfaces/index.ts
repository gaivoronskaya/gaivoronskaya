export interface IUserState {
  login: string;
  password: string;
  repeatPassword?: string;
}

export interface IErrorInputState {
  login?: string;
  password?: string;
  repeatPassword?: string;
  name?: string;
  doctor?: string;
  date?: string;
  complaint?: string;
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