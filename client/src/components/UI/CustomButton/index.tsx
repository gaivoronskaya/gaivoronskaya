import React from "react";
import { ICustomButton } from "./interface.ts";
import { StyledCustomButton } from "./style.ts";

const CustomButton: React.FC<ICustomButton> = ({
  children,
  nameButton,
  typeButton,
  valueButton,
  handleActionButton,
  classNameButton,
}) => {
  return (
    <StyledCustomButton
      type={typeButton}
      name={nameButton}
      value={valueButton}
      className={classNameButton}
      onClick={handleActionButton}
    >
      {children}
    </StyledCustomButton>
  );
};

export default CustomButton;
