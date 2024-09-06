import React from "react";
import { IHeader } from "./interface.ts";
import {
  StyledHeaderContainer,
  StyledHeaderImage,
  StyledHeaderTitle,
  StyledHeader,
} from "./style.ts";

const Header: React.FC<IHeader> = ({ children, title }) => {
  return (
    <StyledHeader>
      <StyledHeaderContainer>
        <StyledHeaderImage />
        <StyledHeaderTitle>{title}</StyledHeaderTitle>
        {children}
      </StyledHeaderContainer>
    </StyledHeader>
  );
};

export default Header;
