import FieldOptions from './FieldOptions';
import { LuTrash, LuChevronDown } from 'react-icons/lu';

const Field = ({
  label,
  id,
  value,
  fields,
  data,
  isLastField,
  onChange,
  onDelete,
}) => {
  const handleChange = e => {
    onChange(id, e.target.value);
  };

  const handleSelectValue = value => {
    onChange(id, value);
  };

  return (
    <div className="input-group mb-3 dropdown">
      <input
        type="text"
        className="form-control"
        placeholder={label}
        aria-label={label}
        aria-describedby="button-addon2"
        value={value}
        onChange={handleChange}
      />
      <button
        className="btn btn-outline-secondary d-flex align-items-center"
        id="button-addon2"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <LuChevronDown />
      </button>

      <ul className="dropdown-menu dropdown-menu-end">
        <FieldOptions
          options={data}
          fields={fields ? fields : []}
          onSelect={handleSelectValue}
        />
      </ul>
      <button
        className="btn btn-outline-secondary d-flex align-items-center"
        type="button"
        onClick={() => onDelete(id, value)}
        disabled={isLastField}
      >
        <LuTrash />
      </button>
    </div>
  );
};

export default Field;
