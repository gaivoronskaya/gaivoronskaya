import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import RegistrationPage from "./pages/RegistrationPage/index.tsx";
import { RootState } from "./store/reducers/index.ts";

const App: React.FC = () => {
  const isAth = useSelector((state: RootState) => state.user.isAuth);
  
  return (
    <Routes>
      <Route path="/registration" element={<RegistrationPage />} />
    </Routes>
  );
};

export default App;
