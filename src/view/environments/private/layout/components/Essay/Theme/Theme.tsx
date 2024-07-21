import { SpecificationList } from './mapped';

export const DropDownTheme = () => {
  return Object.keys(SpecificationList).map((key) => (
    <option key={key} value={key}>
      {SpecificationList[key].label}
    </option>
  ));
};
