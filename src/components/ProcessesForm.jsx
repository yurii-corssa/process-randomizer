import Field from './Field';
import { LuListPlus, LuArrowLeft } from 'react-icons/lu';

const ProcessesForm = ({
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

export default ProcessesForm;
