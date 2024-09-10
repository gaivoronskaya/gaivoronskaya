import { Routes, Route } from "react-router-dom";
import RegistrationPage from "./pages/RegistrationPage";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/registration" element={<RegistrationPage />} />
    </Routes>
  );
};

export default App;
