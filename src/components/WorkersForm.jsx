import Field from './Field.jsx';

const WorkersForm = ({ data, fields, addField, onChange }) => {
  return (
    <form>
      {fields.map(field => {
        return (
          <Field
            key={field.id}
            field={field}
            data={data}
            onChange={onChange}
            label="Worker"
          />
        );
      })}

      <div className="d-grid gap-2">
        <button type="button" className="btn btn-primary" onClick={addField}>
          +
        </button>
      </div>
    </form>
  );
};

export default WorkersForm;
