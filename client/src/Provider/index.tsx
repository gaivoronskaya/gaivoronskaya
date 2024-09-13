import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import HeaderContext from "../context/index";
import { IHeaderProvider } from "./interface";
import { IHeaderContext } from "../interfaces/index";

const HeaderProvider: React.FC<IHeaderProvider> = ({ children }) => {
  const location = useLocation();
  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    switch (location.pathname) {
      case "/login":
        setTitle("Войти в систему");
        break;
      case "/registration":
        setTitle("Зарегистрироваться в системе");
        break;
      case "/main":
        setTitle("Приемы");
        break;
      default:
        setTitle("");
    }
  }, [location.pathname]);

  const contextValue: IHeaderContext = { title };

  return (
    <HeaderContext.Provider value={contextValue}>
      {children}
    </HeaderContext.Provider>
  );
};

export { HeaderProvider };
