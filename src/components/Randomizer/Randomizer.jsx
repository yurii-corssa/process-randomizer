import db from './db.json';
import { useEffect, useState } from 'react';
import ProcessesForm from './ProcessesForm';
import WorkersForm from './WorkersForm';
import { createField } from 'components/utils/createField';

const initialWorkerField = {
  id: '',
  value: '',
  selected: false,
};

const initialProcessField = {
  id: '',
  value: '',
};

const Randomizer = () => {
  const [dataProcesses, setDataProcesses] = useState({});
  const [dataWorkers, setDataWorkers] = useState({});
  const [processFields, setProcessFields] = useState([]);
  const [workerFields, setWorkerFields] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  console.log(dataWorkers);

  useEffect(() => {
    const data = db;
    setDataProcesses(data.processes);
    setDataWorkers(data.workers);
    addWorkerField();
    addProcessField();
    setIsLoading(false);
  }, []);

  const addWorkerField = () => {
    const newField = createField(initialWorkerField);
    setWorkerFields(prev => [...prev, newField]);
  };

  const addProcessField = () => {
    const newField = createField(initialProcessField);
    setProcessFields(prev => [...prev, newField]);
  };

  const handleChangeWorker = (id, value) => {
    setWorkerFields(
      workerFields.map(worker =>
        worker.id === id ? { ...worker, value } : worker
      )
    );
    setDataWorkers(
      dataWorkers.map(worker =>
        worker.value === value ? { ...worker, selected: true } : worker
      )
    );
  };

  const handleChangeProcess = (id, value) => {
    setProcessFields(
      processFields.map(process =>
        process.id === id ? { ...process, value } : process
      )
    );
  };

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div className="container pt-5 d-flex gap-5 justify-content-center">
      <ProcessesForm
        data={dataProcesses}
        fields={processFields}
        addField={addProcessField}
        onChange={handleChangeProcess}
      />
      <WorkersForm
        data={dataWorkers}
        fields={workerFields}
        addField={addWorkerField}
        onChange={handleChangeWorker}
      />
    </div>
  );
};

export default Randomizer;
