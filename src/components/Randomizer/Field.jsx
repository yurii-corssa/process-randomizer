import { useState } from 'react';
import FieldOptions from './FieldOptions';

const Field = ({ data }) => {
  const [value, setValue] = useState('');

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleSelectValue = value => {
    setValue(value);
  };

  return (
    <div class="input-group mb-3 dropdown">
      <input
        type="text"
        className="form-control"
        placeholder="Recipient's username"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        value={value}
        onChange={handleChange}
      />
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      ></button>
      <ul className="dropdown-menu dropdown-menu-lg-end dropdown-menu-end">
        <FieldOptions options={data} onSelect={handleSelectValue} />
      </ul>
    </div>
  );
};

export default Field;
