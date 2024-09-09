import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import HeaderContext from "../context/index.tsx";
import { IHeaderProvider } from "./interface.ts";
import { IHeaderContext } from "../interfaces/index.ts";

const HeaderProvider: React.FC<IHeaderProvider> = ({ children }) => {
  const location = useLocation();
  const [title, setTitle] = useState<string>("Default Header Title");

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
        setTitle("HOSPITAL");
    }
  }, [location.pathname]);

  const contextValue: IHeaderContext = { title };

  return (
    <HeaderContext.Provider value={contextValue}>
      {children}
    </HeaderContext.Provider>
  );
};

const useHeaderContext = () => {
  return useContext(HeaderContext);
};

export { HeaderProvider, useHeaderContext };
