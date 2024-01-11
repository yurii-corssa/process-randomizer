import { nanoid } from 'nanoid';

const SelectProcces = ({ id, value, onChange, processes }) => {
  return (
    <select
      name={id}
      value={value || ''}
      onChange={e => onChange(id, e.target.value)}
    >
      <option value="">Select Process</option>
      {processes.map(process => (
        <option key={nanoid()} value={process}>
          {process}
        </option>
      ))}
    </select>
  );
};

export default SelectProcces;
