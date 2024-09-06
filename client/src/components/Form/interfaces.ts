import { ReactNode } from "react";

export interface ICustomForm {
  title: string;
  handleChangeInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  children: ReactNode;
  linkTitle: string;
  buttonTitle: string;
  path: string;
}
