import { createContext } from "react";
import { IHeaderContext } from "../interfaces";

const HeaderContext = createContext<IHeaderContext>({ title: "" });

export default HeaderContext;
