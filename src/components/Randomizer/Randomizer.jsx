import { useState } from 'react';
import db from './db.json';
import ProcessesForm from './ProcessesForm';
import WorkersForm from './WorkersForm';

const Randomizer = () => {
  const [selectedValues, setSelectedValues] = useState({});
  const [workers, setWorkers] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Selected Values:', selectedValues);
  };

  return (
    <div>
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
      <form>
        <WorkersForm data={db} workers={workers} setWorkers={setWorkers} />
      </form>
    </div>
  );
};

export default Randomizer;
