import FieldOptions from './FieldOptions';
import { LuTrash, LuChevronDown } from 'react-icons/lu';

const Field = ({ field, data, onChange, onDelete, label, lastField }) => {
  const handleChange = e => {
    onChange(field.id, e.target.value);
  };

  const handleSelectValue = value => {
    onChange(field.id, value);
  };

  const handleDelete = () => {
    onDelete(field.id);
  };

  return (
    <div className="input-group mb-3 dropdown">
      <input
        type="text"
        className="form-control"
        placeholder={label}
        aria-label={label}
        aria-describedby="button-addon2"
        value={field.value}
        onChange={handleChange}
      />
      <button
        className="btn btn-primary d-flex align-items-center"
        id="button-addon2"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <LuChevronDown />
      </button>

      <ul className="dropdown-menu dropdown-menu-end">
        <FieldOptions options={data} onSelect={handleSelectValue} />
      </ul>
      <button
        className="btn btn-primary d-flex align-items-center"
        type="button"
        onClick={handleDelete}
        disabled={lastField}
      >
        <LuTrash />
      </button>
    </div>
  );
};

export default Field;
