import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import AllActionCreators from "../store/action-creators";
import { AppDispatch } from "../store";

const useAction = () => {
  const dispatch: AppDispatch = useDispatch();
  return bindActionCreators(AllActionCreators, dispatch);
};

export default useAction;
