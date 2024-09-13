import appointmentsEnums from "../enums/appointments";
import { IAppointmentsStore, IAction } from "./interfaces";

const initialState: IAppointmentsStore = {
  appointments: [],
  error: null,
};

const appointmentsReducer = (
  state: IAppointmentsStore = initialState,
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

    case appointmentsEnums.CREATE_APPOINTMENT:
      return {
        ...state,
        error: null,
      }

    case  appointmentsEnums.CREATE_APPOINTMENT_SUCCESS:
      return {
        appointments: [...state.appointments, action.payload],
        error: null,
      }

    case appointmentsEnums.CREATE_APPOINTMENT_ERROR:
      return {
        ...state,
        error: action.error,
      }

    default:
      return state;
  }
};

export default appointmentsReducer;
