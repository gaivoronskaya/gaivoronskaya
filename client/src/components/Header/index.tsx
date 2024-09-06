import React from "react";
import { useHeaderContext } from "../../context/index.tsx";
import { IHeader } from "./interfaces.ts";
import {
  StyledHeaderContainer,
  StyledHeaderImage,
  StyledHeaderTitle,
  StyledHeader,
} from "./style.ts";

const Header: React.FC<IHeader> = ({ children }) => {
  const { title } = useHeaderContext();
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
