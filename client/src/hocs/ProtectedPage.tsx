import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../store/reducers";

const ProtectedPage = ({ wrappedComponent }) => {
  const isAuth = useSelector((state: RootState) => state.user.isAuth);
  const navigate = useNavigate();
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    if (!token) {
      return navigate("/login");
    }
  }, [isAuth]);

  return wrappedComponent;
};

export default ProtectedPage;