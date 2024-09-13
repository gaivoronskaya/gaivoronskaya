import api from "../http/index";

export const getAppointments = async () => {
  const appointments = await api.get("/appointments");

  return appointments.data;
};
