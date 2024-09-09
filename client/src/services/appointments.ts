import api from "../http/index.ts";

export const getAppointments = async () => {
  const appointments = await api.get("/appointments");

  return appointments.data;
};
