import { LuArrowRight } from 'react-icons/lu';

const ValueSelection = ({ data, fields, onCheckboxChange, changeStep }) => {
  const handleSubmit = e => {
    e.preventDefault();
    changeStep(2);
  };

  const isChecked = value => fields?.some(field => field.value === value);

  console.log(fields);

  return (
    <form onSubmit={handleSubmit}>
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
                onChange={() => onCheckboxChange(value)}
              />
              <label className="form-check-label" htmlFor={value}>
                {value}
              </label>
            </div>
          );
        })}
      </div>

      <div className="d-grid gap-2">
        <button type="submit" className="btn btn-primary">
          Next
          <LuArrowRight />
        </button>
      </div>
    </form>
  );
};

export default ValueSelection;
