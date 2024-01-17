import Field from './Field.jsx';
import { LuArrowLeft, LuListPlus } from 'react-icons/lu';

const WorkersForm = ({
  data,
  fields,
  addField,
  onChange,
  onDelete,
  changeStep,
}) => {
  return (
    <form>
      <div className="fields-container">
        {fields.map(({ id, value }) => {
          return (
            <Field
              key={id}
              label="Worker"
              id={id}
              value={value}
              fields={fields}
              data={data}
              isLastField={fields.length <= 1}
              onChange={onChange}
              onDelete={onDelete}
            />
          );
        })}
      </div>

      <div className="d-flex gap-2">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => changeStep(1)}
        >
          <LuArrowLeft />
          Back
        </button>
        <button type="button" className="btn btn-primary" onClick={addField}>
          <LuListPlus />
          Add process
        </button>
      </div>
    </form>
  );
};

export default WorkersForm;
