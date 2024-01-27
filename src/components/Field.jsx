import { selectValue } from 'utils/selectValue';
import FieldOptions from './FieldOptions';
import { LuTrash, LuChevronDown } from 'react-icons/lu';
import { deleteField } from 'utils/deleteField';

const Field = ({
  label,
  id,
  value,
  data,
  fields,
  setFields,
  isLastField,
  isUniqueData,
  disabled,
}) => {
  const handleWriteChange = e => {
    selectValue(fields, setFields, id, e.target.value);
  };

  const handleSelectValue = value => {
    selectValue(fields, setFields, id, value);
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
        disabled={disabled}
        onChange={handleWriteChange}
      />
      <button
        className="btn btn-outline-secondary d-flex align-items-center"
        id="button-addon2"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        disabled={disabled}
      >
        <LuChevronDown />
      </button>

      <ul className="dropdown-menu dropdown-menu-end">
        <FieldOptions
          options={data}
          fields={fields ? fields : []}
          isUniqueData={isUniqueData}
          onSelect={handleSelectValue}
        />
      </ul>
      <button
        className="btn btn-outline-secondary d-flex align-items-center"
        type="button"
        onClick={() => deleteField(fields, setFields, id, value)}
        disabled={isLastField || disabled}
      >
        <LuTrash />
      </button>
    </div>
  );
};

export default Field;
