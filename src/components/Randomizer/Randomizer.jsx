import db from './db.json';
import { useEffect, useState } from 'react';
import ProcessesForm from './ProcessesForm';
import WorkersForm from './WorkersForm';
import { createField } from 'utils/createField';
import ResultsTable from './ResultsTable';

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
  const [randomValues, setRandomValues] = useState([]);

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

  const runRundomize = () => {
    const selectedWorkers = workerFields
      .filter(worker => worker.value)
      .map(worker => worker.value);

    const selectedProcess = processFields
      .filter(process => process.value)
      .map(process => process.value);

    if (selectedProcess.length > selectedWorkers.length) {
      alert('not enough employees have been selected');
      return;
    }

    const iteratedProcesses = selectedProcess.map(process => {
      const workersCount = selectedWorkers.length;
      const randomNumber = Math.floor(Math.random() * workersCount);

      const processItem = { process, worker: selectedWorkers[randomNumber] };

      selectedWorkers.splice(randomNumber, 1);

      return processItem;
    });

    const iteratedRemainingWorker = selectedWorkers.map(worker => ({
      process: 'Sortownia',
      worker,
    }));

    const ahaha = [{ process: 'Zamiatanie', worker: 'Korbut Artem' }];

    const finalResult = [
      ...iteratedProcesses,
      ...iteratedRemainingWorker,
      ...ahaha,
    ];

    setRandomValues(finalResult);
  };

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <>
      <section className="container p-5 d-flex flex-column gap-5">
        <div className="d-flex gap-5 justify-content-center">
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
        <div className="d-flex justify-content-center">
          <button
            type="button"
            className="btn btn-primary w-25"
            onClick={runRundomize}
          >
            Go
          </button>
        </div>
      </section>
      <section className="container d-flex flex-column gap-5 align-items-center">
        {randomValues.length !== 0 && <ResultsTable data={randomValues} />}
      </section>
    </>
  );
};

export default Randomizer;
