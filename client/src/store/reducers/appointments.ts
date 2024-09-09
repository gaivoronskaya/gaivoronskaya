import appointmentsEnums from "../enums/appointments.ts";
import { IAppointmentsReduser, IAction } from "./interfaces";

const initialState: IAppointmentsReduser = {
  appointments: [],
  error: null,
};

const appointmentsReducer = (
  state: IAppointmentsReduser = initialState,
  action: IAction
) => {
  switch (action.type) {
    case appointmentsEnums.GET_APPOINTMENT:
      return {
        ...state,
        error: null,
      };

    case appointmentsEnums.GET_APPOINTMENT_SUCCESS:
      return {
        ...state,
        appointments: action.payload,
        error: null,
      };

    case appointmentsEnums.GET_APPOINTMENT_ERROR:
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
};

export default appointmentsReducer;
