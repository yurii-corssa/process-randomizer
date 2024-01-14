import Field from './Field';
import { LuPlus } from 'react-icons/lu';

const ProcessesForm = ({ data, fields, addField, onChange, onDelete }) => {
  return (
    <form className="form-container">
      <div className="fields-container">
        {fields.map(field => {
          return (
            <Field
              key={field.id}
              field={field}
              data={data}
              onChange={onChange}
              label="Process"
              onDelete={onDelete}
              lastField={fields.length <= 1}
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
