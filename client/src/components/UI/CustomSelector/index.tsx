import React from "react";
import { ICustomSelector } from "./interfaces.ts";
import { StyledSelector, StyledLabel, StyledSelectContainer } from "./style.ts";

const CustomSelector: React.FC<ICustomSelector> = ({
  valueSelector,
  nameSelector,
  handleChangeSelector,
  options,
  labelOption,
  valueOption,
  labelSelector,
  classNameSelector,
  classNameSelectorContainer,
}) => (
  <StyledSelectContainer className={classNameSelectorContainer}>
    {labelSelector && (
      <StyledLabel htmlFor={`select_${nameSelector}`}>
        {labelSelector}
      </StyledLabel>
    )}
    <StyledSelector
      value={valueSelector}
      name={nameSelector}
      onChange={handleChangeSelector}
      id={`select_${nameSelector}`}
      className={classNameSelector}
    >
      <option value={valueOption} disabled>
        {labelOption}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelector>
  </StyledSelectContainer>
);

export default CustomSelector;
