import db from './db.json';
import { useCallback, useEffect, useState } from 'react';
import ManuallyForm from './ManuallyForm';
import ResultsTable from './ResultsTable';
import BackgroundCard from './BackgroundCard';
import SelectForm from './SelectForm';
import ConfettiExplosion from 'react-confetti-explosion';
import { Button, Stack, Tab, Tabs } from 'react-bootstrap';
import Footer from './Footer';

const Randomizer = () => {
  const [dataProcesses, setDataProcesses] = useState({});
  const [dataWorkers, setDataWorkers] = useState({});

  const [processFields, setProcessFields] = useState([]);
  const [workerFields, setWorkerFields] = useState([]);

  const [randomValues, setRandomValues] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const [iterationSpeed, setIterationSpeed] = useState(0);

  const [isRandomizing, setIsRandomizing] = useState(false);

  const [explosion, setExplosion] = useState(false);

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
      setIsRandomizing(false);
      setIterationSpeed(0);
      setExplosion(true);
      setTimeout(() => setExplosion(false), 4000);
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

  const handleClick = () => {
    if (processFields.length && workerFields.length) {
      setIsRandomizing(true);
      setIterationSpeed(10);
    }
  };

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <Stack as="main" className="container">
      <Stack as="section" gap={4} className="p-3">
        <Stack
          bsPrefix="hstack"
          gap={5}
          className="justify-content-between form-cards"
        >
          <BackgroundCard title="Processes">
            <Tabs
              defaultActiveKey="select"
              id="fill-tab-example"
              className="mb-3"
              fill
            >
              <Tab eventKey="select" title="Select">
                <SelectForm
                  data={dataProcesses}
                  fields={processFields}
                  setFields={setProcessFields}
                  disabled={isRandomizing}
                />
              </Tab>
              <Tab eventKey="manually" title="Manually">
                <ManuallyForm
                  label="Process"
                  data={dataProcesses}
                  fields={processFields}
                  setFields={setProcessFields}
                  isUniqueData={false}
                  disabled={isRandomizing}
                />
              </Tab>
            </Tabs>
          </BackgroundCard>

          <BackgroundCard title="Employees">
            <Tabs
              defaultActiveKey="select"
              id="fill-tab-example"
              className="mb-3"
              fill
            >
              <Tab eventKey="select" title="Select">
                <SelectForm
                  data={dataWorkers}
                  fields={workerFields}
                  setFields={setWorkerFields}
                  disabled={isRandomizing}
                />
              </Tab>
              <Tab eventKey="manually" title="Manually">
                <ManuallyForm
                  label="Employee"
                  data={dataWorkers}
                  fields={workerFields}
                  setFields={setWorkerFields}
                  isUniqueData={true}
                  disabled={isRandomizing}
                />
              </Tab>
            </Tabs>
          </BackgroundCard>
        </Stack>

        <Stack bsPrefix="hstack" className="justify-content-center" gap={4}>
          <Button
            variant="secondary"
            className="w-25"
            onClick={handleClick}
            disabled={isRandomizing}
          >
            Go
          </Button>
          <Button
            variant="secondary"
            className="w-25"
            onClick={() => window.location.reload()}
          >
            Reset
          </Button>
        </Stack>
      </Stack>

      <Stack as="section" gap={4} className="p-3">
        <BackgroundCard title="Results Table">
          {explosion && (
            <ConfettiExplosion
              force={0.8}
              duration={3000}
              particleCount={250}
            />
          )}
          <ResultsTable data={randomValues} />
        </BackgroundCard>
      </Stack>
    </Stack>
  );
};

export default Randomizer;
