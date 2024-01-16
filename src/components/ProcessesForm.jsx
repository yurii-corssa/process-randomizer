import Field from './Field';
import { LuPlus } from 'react-icons/lu';

const ProcessesForm = ({ data, fields, addField, onChange, onDelete }) => {
  return (
    <form>
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
              onChange={onChange}
              onDelete={onDelete}
            />
          );
        })}
      </div>

      <div className="d-grid gap-2">
        <button type="button" className="btn btn-primary" onClick={addField}>
          <LuPlus />
        </button>
      </div>
    </form>
  );
};

export default ProcessesForm;
