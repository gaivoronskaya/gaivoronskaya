
import { Routes, Route, Navigate } from "react-router-dom";
import RegistrationPage from "./pages/RegistrationPage/index.tsx";
import LoginPage from "./pages/LoginPage/index.tsx";
import MainPage from "./pages/MainPage/index.tsx";
import AuthPage from "./hocs/AuthPage.tsx";
import ProtectedPage from "./hocs/ProtectedPage.tsx";

const App: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/main"
        element={<ProtectedPage wrappedComponent={<MainPage />} />}
      />
      <Route
        path="/login"
        element={<AuthPage wrappedComponent={<LoginPage />} />}
      />
      <Route
        path="/registration"
        element={<AuthPage wrappedComponent={<RegistrationPage />} />}
      />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default App;
