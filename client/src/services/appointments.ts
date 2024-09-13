import api from "../http";

export const getAppointments = async () => {
  const appointments = await api.get("/appointments");

  return appointments.data;
};
