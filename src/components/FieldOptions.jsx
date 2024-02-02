import { nanoid } from 'nanoid';
import { DropdownItem } from 'react-bootstrap';

const FieldOptions = ({ options, fields, isUniqueData, onSelect }) => {
  return options.map(option => {
    const isSelected = fields.some(({ value }) => value === option.value);

    return (
      <DropdownItem
        href="#"
        key={nanoid()}
        onClick={() => onSelect(option.value)}
        disabled={isSelected && isUniqueData}
      >
        {option.value}
      </DropdownItem>
    );
  });
};

export default FieldOptions;
