export interface IAddingAppointmentForm {
  appointment: {
    name: string;
    doctor: string;
    date: string;
    complaint: string;
  };
  handleChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleActionButton?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleChangeSelector?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  error: {
    name?: string;
    date?: string;
    complaints?: string;
  };
}
