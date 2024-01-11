import { nanoid } from 'nanoid';

const SelectWorker = ({ id, value, onChange, allWorkers }) => {
  return (
    <select
      name={id}
      value={value || ''}
      onChange={e => {
        console.log(e.target.value);
      }}
    >
      <option value="">Select Worker</option>
      {allWorkers.map(worker => (
        <option key={nanoid()} value={worker}>
          {worker}
        </option>
      ))}
    </select>
  );
};

export default SelectWorker;
