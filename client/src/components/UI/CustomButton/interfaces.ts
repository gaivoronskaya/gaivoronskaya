import React, { ReactNode } from "react";
import { typeButton } from "./type";

export interface ICustomButton {
  children?: ReactNode;
  nameButton: string;
  typeButton: typeButton;
  valueButton?: string;
  handleActionButton?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  classNameButton?: string;
}
