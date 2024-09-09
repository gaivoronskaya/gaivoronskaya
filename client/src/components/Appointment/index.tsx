import React from "react";
import { IAppointment } from "./interfaces.ts";
import CustomButton from "../UI/CustomButton/index.tsx";
import { formatDate } from "../../helpers/formate-date.ts";
import { StyledCell, StyledLineCell, StyledButtons } from "./style.ts";

const Appointment: React.FC<IAppointment> = ({ appointment }) => {
  return (
    <StyledLineCell>
      <StyledCell>{appointment.name}</StyledCell>
      <StyledCell>{appointment.doctor}</StyledCell>
      <StyledCell>{formatDate(appointment.date)}</StyledCell>
      <StyledCell>{appointment.complaint}</StyledCell>
      <StyledCell>
        <StyledButtons>
          <CustomButton classNameButton="appointment__all-button appointment__all-button_delete-button" />
          <CustomButton classNameButton="appointment__all-button appointment__all-button_edit-button" />
        </StyledButtons>
      </StyledCell>
    </StyledLineCell>
  );
};

export default Appointment;
