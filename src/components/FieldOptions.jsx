import { nanoid } from 'nanoid';

const FieldOptions = ({ options, fields, isUniqueData, onSelect }) => {
  return options.map(option => {
    const isSelected = fields.some(({ value }) => value === option.value);

    return (
      <li key={nanoid()}>
        <button
          className="dropdown-item"
          type="button"
          onClick={() => onSelect(option.value)}
          disabled={isSelected && isUniqueData}
        >
          {option.value}
        </button>
      </li>
    );
  });
};

export default FieldOptions;
