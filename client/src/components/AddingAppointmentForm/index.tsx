import React from "react";
import CustomButton from "../UI/CustomButton/index.tsx";
import CustomSelector from "../UI/CustomSelector/index.tsx";
import CustomInput from "../UI/CustomInput/index.tsx";
import { IAddingAppointmentForm } from "./interfaces";
import { doctorsOptions } from "../../constants.ts";
import { StyledAppointmentContainer, StyledAddAppointmentForm } from "./style.ts";

const AddingAppointmentForm: React.FC<IAddingAppointmentForm> = ({
  appointment,
  handleChangeInput,
  handleActionButton,
  error,
  handleSubmit,
  handleChangeSelector,
}) => {
  return (
    <StyledAddAppointmentForm>
      <StyledAppointmentContainer onSubmit={handleSubmit}>
        <CustomInput
          label="Имя:"
          valueInput={appointment.name}
          typeInput="text"
          handleChangeInput={handleChangeInput}
          nameInput="name"
          error={error.name}
          classNameInput="adding-appointment-form__input"
        />
        <CustomSelector
          labelSelector="Врач:"
          valueSelector={appointment.doctor}
          nameSelector="doctor"
          handleChangeSelector={handleChangeSelector}
          options={doctorsOptions}
          classNameSelector="adding-appointment-formm__selector"
        />
        <CustomInput
          label="Дата:"
          valueInput={appointment.date}
          typeInput="date"
          handleChangeInput={handleChangeInput}
          nameInput="date"
          error={error.date}
          classNameInput="adding-appointment-form__input"
        />
        <CustomInput
          label="Жалобы:"
          valueInput={appointment.complaint}
          handleChangeInput={handleChangeInput}
          typeInput="text"
          nameInput="complaint"
          error={error.complaints}
          classNameInput="adding-appointment-form__input"
        />
        <CustomButton
          classNameButton="adding-appointment-form__button"
          handleActionButton={handleActionButton}
          typeButton="submit"
          nameButton="mainNameButton"
          valueButton="mainValueButton"
        >
          Добавить
        </CustomButton>
      </StyledAppointmentContainer>
    </StyledAddAppointmentForm>
  );
};

export default AddingAppointmentForm;
