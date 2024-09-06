import { typeInput } from "./type";

export interface ICustomInput {
  placeholder?: string;
  label?: string;
  typeInput: typeInput;
  nameInput: string;
  handleChangeInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: undefined | string;
  classNameInput?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
  valueInput?: string;
}
