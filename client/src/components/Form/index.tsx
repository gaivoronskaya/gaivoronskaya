import React from "react";
import CustomButton from "../UI/CustomButton/index.tsx";
import { ICustomForm } from "./interfaces.ts";
import {
  StyledFormContainer,
  StyledFormTitle,
  StyledFormLink,
  StyledFormEntrance,
  StyledFormContent,
  StyledFormImage,
  StyledFormWrapper,
} from "./style.ts";

const Form: React.FC<ICustomForm> = ({
  title,
  children,
  linkTitle,
  buttonTitle,
  path,
  handleSubmit,
}) => {
  return (
    <StyledFormWrapper>
      <StyledFormImage />
      <StyledFormContainer>
        <StyledFormContent onSubmit={handleSubmit}>
          <StyledFormTitle>{title}</StyledFormTitle>
          {children}
          <StyledFormEntrance>
            <CustomButton
              typeButton="submit"
              nameButton="formNameButton"
              valueButton="formValueButton"
            >
              {buttonTitle}
            </CustomButton>
            <StyledFormLink href={path}>{linkTitle}</StyledFormLink>
          </StyledFormEntrance>
        </StyledFormContent>
      </StyledFormContainer>
    </StyledFormWrapper>
  );
};
export default Form;
