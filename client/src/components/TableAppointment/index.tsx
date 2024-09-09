import React from "react";
import { ITableAppointment } from "./interfaces.ts";
import Appointment from "../Appointment/index.tsx";
import { tableHeaders } from "../../constants.ts";
import { StyledTable, StyledLine, StyledTitle, StyledCellsBody } from "./style.ts";

const TableAppointment: React.FC<ITableAppointment> = ({ appointments }) => {
  return (
    <StyledTable>
      <thead>
        <StyledLine>
          {tableHeaders.map((header, index) => (
            <StyledTitle key={index}>{header}</StyledTitle>
          ))}
        </StyledLine>
      </thead>
      <StyledCellsBody>
        {appointments.map((appointment) => (
          <Appointment
            key={appointment._id}
            appointment={appointment}
          />
        ))}
      </StyledCellsBody>
    </StyledTable>
  );
};

export default TableAppointment;
