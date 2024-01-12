import { useState } from 'react';
import db from './db.json';
import ProcessesForm from './ProcessesForm';
import WorkersForm from './WorkersForm';

const Randomizer = () => {
  const [selectedValues, setSelectedValues] = useState({});
  const [selectedWorkers, setSelectedWorkers] = useState(['']);

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Selected Values:', selectedValues);
  };

  return (
    <div
      style={{
        display: 'flex',
        gap: '10px',
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '300px',
          gap: '10px',
        }}
      >
        <ProcessesForm
          data={db}
          selectedValues={selectedValues}
          setSelectedValues={setSelectedValues}
        />
        <button type="submit">Start</button>
      </form>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '300px',
          gap: '10px',
        }}
      >
        <WorkersForm
          data={db.workers}
          selectedWorkers={selectedWorkers}
          setSelectedWorkers={setSelectedWorkers}
        />
      </form>
    </div>
  );
};

export default Randomizer;