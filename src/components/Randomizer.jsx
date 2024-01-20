import db from './db.json';
import { useCallback, useEffect, useState } from 'react';
import ProcessesForm from './ProcessesForm';
import WorkersForm from './WorkersForm';
import { createField } from 'utils/createField';
import ResultsTable from './ResultsTable';
import FormCard from './FormCard';
import ValueSelection from './ValueSelection';

const initialWorkerField = {
  id: '',
  value: '',
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

  const [processFormStep, setProcessFormStep] = useState(1);
  const [workersFormStep, setWorkersFormStep] = useState(1);

  const [randomValues, setRandomValues] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const [iterationSpeed, setIterationSpeed] = useState(null);

  const runRundomize = useCallback(() => {
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

    setRandomValues(iteratedProcesses);

    if (iterationSpeed < 700) {
      setIterationSpeed(prev => prev * 1.1);
    } else if (iterationSpeed < 1000) {
      setIterationSpeed(prev => prev * 1.2);
    } else if (iterationSpeed < 1400) {
      setIterationSpeed(prev => prev * 1.3);
    } else {
      setIterationSpeed(null);
    }
  }, [iterationSpeed, processFields, workerFields]);

  useEffect(() => {
    const data = db;
    setDataProcesses(data.processes);
    setDataWorkers(data.workers);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    let timeoutId = null;

    if (iterationSpeed) {
      timeoutId = setTimeout(runRundomize, iterationSpeed);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [iterationSpeed, runRundomize]);

  const addProcessField = (data = initialProcessField) => {
    const newField = createField(data);
    setProcessFields(prev => [...prev, newField]);
  };

  const addWorkerField = (data = initialWorkerField) => {
    const newField = createField(data);
    setWorkerFields(prev => [...prev, newField]);
  };

  const handleChangeProcess = (id, value) => {
    setProcessFields(
      processFields.map(process =>
        process.id === id ? { ...process, value } : process
      )
    );
  };

  const handleChangeWorker = (id, value) => {
    setWorkerFields(
      workerFields.map(worker =>
        worker.id === id ? { ...worker, value } : worker
      )
    );
  };

  const handleCheckboxChangeProcess = value => {
    const isChecked = processFields.some(field => field.value === value);

    if (isChecked) {
      return setProcessFields(prev =>
        prev.filter(field => field.value !== value)
      );
    } else {
      return addProcessField({ value });
    }
  };

  const handleCheckboxChangeWorkers = value => {
    const isChecked = workerFields.some(field => field.value === value);

    if (isChecked) {
      return setWorkerFields(prev =>
        prev.filter(field => field.value !== value)
      );
    } else {
      return addWorkerField({ value });
    }
  };

  const handleDeleteWorker = id => {
    setWorkerFields(workerFields.filter(worker => worker.id !== id));
  };

  const handleDeleteProcess = id => {
    setProcessFields(processFields.filter(process => process.id !== id));
  };

  const handleChangeStepProcess = step => {
    if (step === 1) {
      setProcessFormStep(1);
    }

    if (step === 2) {
      if (step === 2) {
        setProcessFormStep(2);
      }
    }
  };

  const handleChangeStepWorkers = step => {
    if (step === 1) {
      setWorkersFormStep(1);
    }

    if (step === 2) {
      setWorkersFormStep(2);
    }
  };

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <>
      <section className="container p-3 d-flex flex-column gap-4">
        <div className="d-flex gap-5 justify-content-center">
          <FormCard>
            {processFormStep === 1 && (
              <ValueSelection
                data={dataProcesses}
                fields={processFields}
                onCheckboxChange={handleCheckboxChangeProcess}
                changeStep={handleChangeStepProcess}
              />
            )}
            {processFormStep === 2 && (
              <ProcessesForm
                data={dataProcesses}
                fields={processFields}
                addField={addProcessField}
                onChange={handleChangeProcess}
                onDelete={handleDeleteProcess}
                changeStep={handleChangeStepProcess}
              />
            )}
          </FormCard>
          <FormCard>
            {workersFormStep === 1 && (
              <ValueSelection
                data={dataWorkers}
                fields={workerFields}
                onCheckboxChange={handleCheckboxChangeWorkers}
                changeStep={handleChangeStepWorkers}
              />
            )}
            {workersFormStep === 2 && (
              <WorkersForm
                data={dataWorkers}
                fields={workerFields}
                addField={addWorkerField}
                onChange={handleChangeWorker}
                onDelete={handleDeleteWorker}
                changeStep={handleChangeStepWorkers}
              />
            )}
          </FormCard>
        </div>
        <div className="d-flex justify-content-center">
          <button
            type="button"
            className="btn btn-primary w-25"
            onClick={() => setIterationSpeed(10)}
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
