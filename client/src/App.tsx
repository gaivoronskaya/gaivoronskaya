import React from "react";
import { Routes, Route } from "react-router-dom";
import RegistrationPage from "./pages/RegistrationPage/index.tsx";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/registration" element={<RegistrationPage />} />
    </Routes>
  );
};

export default App;
