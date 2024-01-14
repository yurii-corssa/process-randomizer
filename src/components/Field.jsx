import FieldOptions from './FieldOptions';

const Field = ({ field, data, onChange, label }) => {
  const handleChange = e => {
    onChange(field.id, e.target.value);
  };

  const handleSelectValue = value => {
    onChange(field.id, value);
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
        className="btn btn-primary dropdown-toggle"
        id="button-addon2"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      />
      <ul className="dropdown-menu dropdown-menu-end">
        <FieldOptions options={data} onSelect={handleSelectValue} />
      </ul>
    </div>
  );
};

export default Field;
