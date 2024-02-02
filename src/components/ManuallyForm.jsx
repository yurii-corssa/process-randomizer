import { useEffect } from 'react';
import Field from './Field';
import { LuListPlus } from 'react-icons/lu';
import { addField } from 'utils/addField';
import { Button, Form } from 'react-bootstrap';

const ManuallyForm = ({
  label,
  data,
  fields,
  setFields,
  isUniqueData,
  disabled,
}) => {
  useEffect(() => {
    if (!fields.length) {
      addField(setFields);
    }
  }, [fields.length, setFields]);

  return (
    <Form className="fields-form">
      <div className="fields-container">
        {fields.map(({ id, value }) => {
          return (
            <Field
              key={id}
              label={label}
              id={id}
              value={value}
              data={data}
              isLastField={fields.length <= 1}
              isUniqueData={isUniqueData}
              fields={fields}
              setFields={setFields}
              disabled={disabled}
            />
          );
        })}
      </div>

      <Button
        className="form-btn"
        disabled={disabled}
        onClick={() => addField(setFields)}
      >
        <LuListPlus />
        Add Field
      </Button>
    </Form>
  );
};

export default ManuallyForm;
