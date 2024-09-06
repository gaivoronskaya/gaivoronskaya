import React from "react";
import { ICustomInput } from "./interfaces.ts";
import {
  StyledCustomInput,
  StyledLabel,
  StyledInputContainer,
  StyledErrorText,
} from "./style.ts";

const CustomInput: React.FC<ICustomInput> = ({
  placeholder,
  label,
  typeInput,
  nameInput,
  handleChangeInput,
  error,
  classNameInput,
  inputRef,
  valueInput,
}) => {
  return (
    <StyledInputContainer>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledCustomInput
        placeholder={placeholder}
        type={typeInput}
        value={valueInput}
        name={nameInput}
        id={`input_${nameInput}`}
        className={classNameInput}
        ref={inputRef}
        onChange={handleChangeInput}
      />
      {error && <StyledErrorText>{error}</StyledErrorText>}
    </StyledInputContainer>
  );
};

export default CustomInput;
