import * as UserActionCreators from "./users";
import * as AppontmentsActionCreators from "./appointments"

export default {
  ...UserActionCreators,
  ...AppontmentsActionCreators,
};
