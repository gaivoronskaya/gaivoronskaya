import * as UserActionCreators from "./users.ts";
import * as AppontmentsActionCreators from "./appointments.ts"

export default {
  ...UserActionCreators,
  ...AppontmentsActionCreators,
};
