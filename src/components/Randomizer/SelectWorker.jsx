import { nanoid } from 'nanoid';
import { useState } from 'react';
import OptionsItems from './WorkerOptions';
import WorkerOptions from './WorkerOptions';
import db from './db.json';

const SelectWorker = ({ index, onChange, allWorkers }) => {
  const [value, setValue] = useState('');
  const [workers, setWorkers] = useState(db.workers);

  const handleChange = e => {
    setValue(e.target.value);
    setWorkers(
      workers.map(worker => {
        if (worker.name === e.target.value) {
          worker.disabled = true;
        }
        return worker;
      })
    );
    // onChange(e.target.value);
  };

  return (
    <select name={`worker${index}`} value={value} onChange={handleChange}>
      <option value="">Select Worker</option>
      {/* <WorkerOptions workers={workers} /> */}
      {workers.map(({ name }) => {
        const worker = workers.find(worker => worker.name === name);
        return (
          <option key={nanoid()} value={worker.name} disabled={worker.disabled}>
            {worker.name}
          </option>
        );
      })}
    </select>
  );
};

export default SelectWorker;
