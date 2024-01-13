import { nanoid } from 'nanoid';

const FieldOptions = ({ options, onSelect }) => {
  return options.map(option => {
    return (
      <li key={nanoid()}>
        <button
          className="dropdown-item"
          type="button"
          onClick={() => onSelect(option.value)}
          disabled={option.selected}
        >
          {option.value}
        </button>
      </li>
    );
  });
};

export default FieldOptions;
