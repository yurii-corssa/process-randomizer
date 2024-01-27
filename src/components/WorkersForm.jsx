import { useEffect } from 'react';
import Field from './Field.jsx';
import { LuListPlus } from 'react-icons/lu';

const WorkersForm = ({ data, fields, addField, onChange, onDelete }) => {
  useEffect(() => {
    if (!fields.length) {
      addField();
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
              label="Worker"
              id={id}
              value={value}
              data={data}
              isLastField={fields.length <= 1}
              onChange={onChange}
              onDelete={onDelete}
            />
          );
        })}
      </div>

      <button
        type="button"
        className="btn btn-primary"
        onClick={() => addField()}
      >
        <LuListPlus />
        Add process
      </button>
    </form>
  );
};

export default WorkersForm;
