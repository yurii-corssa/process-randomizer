// import { nanoid } from 'nanoid';
// import { useState } from 'react';
import SelectWorker from './SelectWorker';

const WorkersForm = ({ data, workers, setWorkers }) => {
  const addSelect = () => {
    setWorkers(values => [...values, '']);
  };

  const handleSelectChange = (index, value) => {
    setWorkers(values => values.splice(index, 1, value));
  };

  return (
    <>
      {workers.map(worker => {
        return (
          <SelectWorker
            key={worker}
            id={worker}
            value={worker}
            onChange={handleSelectChange}
            allWorkers={data.workers}
          />
        );
      })}
      <button type="button" onClick={addSelect}>
        +
      </button>
    </>
  );
};

export default WorkersForm;
