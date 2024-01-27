import { useEffect } from 'react';
import Field from './Field';
import { LuListPlus } from 'react-icons/lu';
import { addField } from 'utils/addField';

const ManuallyForm = ({ data, fields, setFields, isUniqueData, disabled }) => {
  useEffect(() => {
    if (!fields.length) {
      addField(setFields);
    }
  }, []);

  return (
    <form
      style={{
        height: '40vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div className="fields-container">
        {fields.map(({ id, value }) => {
          return (
            <Field
              key={id}
              label="Process"
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

      <button
        type="button"
        className="btn btn-primary"
        disabled={disabled}
        onClick={() => addField(setFields)}
      >
        <LuListPlus />
        Add Field
      </button>
    </form>
  );
};

export default ManuallyForm;
