import { LuArrowRight } from 'react-icons/lu';

const ValueSelection = ({
  data,
  checkedValues,
  setCheckedValues,
  changeStep,
}) => {
  const handleCheckboxChange = value => {
    setCheckedValues(prev => {
      if (prev.includes(value)) {
        return prev.filter(item => item !== value);
      } else {
        return [...prev, value];
      }
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    changeStep(2);
  };

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
                checked={checkedValues.includes(value)}
                onChange={() => handleCheckboxChange(value)}
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
