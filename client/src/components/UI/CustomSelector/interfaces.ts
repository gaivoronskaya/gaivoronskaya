export interface ICustomSelector {
  valueSelector?: string;
  nameSelector?: string;
  handleChangeSelector?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string; label: string }[];
  labelOption?: string;
  valueOption?: string;
  labelSelector?: string;
  classNameSelector?: string;
  classNameSelectorContainer?: string;
}