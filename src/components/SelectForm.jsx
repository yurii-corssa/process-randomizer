import { Form } from 'react-bootstrap';
import { toggleCheckbox } from 'utils/toggleCheckbox';

const SelectForm = ({ data, fields, setFields, disabled }) => {
  const isChecked = value => fields?.some(field => field.value === value);

  return (
    <Form className="fields-form">
      <div className="checks-container">
        {data.map(({ value }) => {
          return (
            <Form.Group key={value} className="check-item">
              <Form.Check
                className="check-btn"
                type="checkbox"
                name={value}
                value={value}
                id={value}
                checked={isChecked(value)}
                onChange={() => toggleCheckbox(fields, setFields, value)}
                disabled={disabled}
              />
              <Form.Label htmlFor={value}>{value}</Form.Label>
            </Form.Group>
          );
        })}
      </div>
    </Form>
  );
};

export default SelectForm;
