import { toggleCheckbox } from 'utils/toggleCheckbox';

const SelectForm = ({ data, fields, setFields, disabled }) => {
  const isChecked = value => fields?.some(field => field.value === value);

  return (
    <form style={{ height: '40vh' }}>
      <div className="form-check checks-container">
        {data.map(({ value }) => {
          return (
            <div key={value} className="check-item">
              <input
                className="form-check-input"
                type="checkbox"
                name={value}
                value={value}
                id={value}
                checked={isChecked(value)}
                onChange={() => toggleCheckbox(fields, setFields, value)}
                disabled={disabled}
              />
              <label className="form-check-label" htmlFor={value}>
                {value}
              </label>
            </div>
          );
        })}
      </div>
    </form>
  );
};

export default SelectForm;
