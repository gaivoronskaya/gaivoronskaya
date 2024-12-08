import React, { useContext } from "react";
import HeaderContext from "../../context";
import { IHeader } from "./interfaces";
import {
  StyledHeaderContainer,
  StyledHeaderImage,
  StyledHeaderTitle,
  StyledHeader,
} from "./style";

const Header: React.FC<IHeader> = ({ children }) => {
  const { title } = useContext(HeaderContext);
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
