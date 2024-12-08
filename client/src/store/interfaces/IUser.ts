export interface IUser {
  login: string;
  password: string;
  accessToken?: string;
}

export interface IAppointment {
  _id: string;
  userId: string;
  name: string;
  doctor: string;
  date: string;
  complaint: string;
}