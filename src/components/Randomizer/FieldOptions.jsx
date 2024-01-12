const FieldOptions = ({ options, onSelect }) => {
  return options.map(option => {
    return (
      <li key={option.name}>
        <button
          className="dropdown-item"
          type="button"
          onClick={() => onSelect(option.name)}
        >
          {option.name}
        </button>
      </li>
    );
  });
};

export default FieldOptions;
