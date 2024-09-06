import { createContext, useContext } from "react";
import { IHeaderContext } from "../interfaces";

const HeaderContext = createContext<IHeaderContext>({ title: "" });

export const useHeaderContext = () => useContext(HeaderContext);

export default HeaderContext;
