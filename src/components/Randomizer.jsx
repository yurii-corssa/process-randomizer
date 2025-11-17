import { useEffect, useState } from 'react';
import db from './db.json';
import { Card, Stack } from 'react-bootstrap';
import { nanoid } from 'nanoid';
import { validateEmployees, validateProcesses } from 'utils/validation';
import RandomizerForm from './RandomizerForm';
import Confetti from './Confetti';
import ResultTable from './ResultTable';

const animationDuration = 5800;

const bezier = (t, i, p1, p2, f) =>
  (1 - t) * (1 - t) * (1 - t) * i +
  3 * (1 - t) * (1 - t) * t * p1 +
  3 * (1 - t) * t * t * p2 +
  t * t * t * f;

const shuffleArray = array => {
  const shuffled = [...array];

  for (let index = shuffled.length - 1; index > 0; index--) {
    const randomIndex = Math.floor(Math.random() * (index + 1));

    const temp = shuffled[index];
    shuffled[index] = shuffled[randomIndex];
    shuffled[randomIndex] = temp;
  }
  return shuffled;
};

const Randomizer = () => {
  const [processList, setProcessList] = useState([]);
  const [employeeList, setEmployeeList] = useState([]);

  const [selectedProcesses, setSelectedProcesses] = useState([]);
  const [selectedEmployees, setSelectedEmployees] = useState([]);

  const [resultList, setResultList] = useState([]);

  const [errorMessage, setErrorMessage] = useState({
    process: null,
    employee: null,
  });
  const [isValid, setIsValid] = useState({ process: false, employee: false });

  const [isRandomizing, setIsRandomizing] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await new Promise(resolve =>
          setTimeout(() => resolve(db), 2000)
        );

        setProcessList(data.processes);
        setEmployeeList(data.employees);
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSelectProcesses = newProcesses => {
    const updatedProcesses = newProcesses.map((process, idx) =>
      idx === newProcesses.length - 1
        ? { value: process.value, id: nanoid(6) }
        : process
    );
    setSelectedProcesses(updatedProcesses);
  };

  const startRandomization = () => {
    setIsRandomizing(true);

    const startTime = performance.now();
    const employeesSnapshot = [...selectedEmployees];

    let frameId;

    const animate = currentTime => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / animationDuration, 1);
      const easedProgress = bezier(progress, 0, 0.5, 0.5, 1);
      const delay = easedProgress * 280;

      const shuffledEmployees = shuffleArray(employeesSnapshot);
      const resultList = selectedProcesses.map((process, index) => {
        const employee = shuffledEmployees[index % shuffledEmployees.length];

        return { process, employee };
      });

      setResultList(resultList);

      if (elapsed < animationDuration) {
        setTimeout(() => {
          frameId = requestAnimationFrame(animate);
        }, delay);
      } else {
        setIsRandomizing(false);
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 4000);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const processError = validateProcesses(selectedProcesses);
    const employeeError = validateEmployees(
      selectedEmployees,
      selectedProcesses
    );

    if (!!processError || !!employeeError) {
      setErrorMessage({ process: processError, employee: employeeError });
      setIsValid({ process: !processError, employee: !employeeError });
      return;
    }
    setErrorMessage({ process: null, employee: null });
    setIsValid({ process: false, employee: false });
    startRandomization();
  };

  const reset = () => {
    setSelectedProcesses([]);
    setSelectedEmployees([]);
    setResultList([]);
  };

  return (
    <main>
      <Stack className="container min-vh-100 align-items-center justify-content-center">
        <Card>
          <Card.Body className="d-grid gap-4">
            <Card.Title as="h1">Process Randomizer</Card.Title>
            <Card.Text>
              To select a process or employee, you can choose from a list or
              manually enter values. To add multiple values simultaneously,
              separate them with a comma.
            </Card.Text>

            <RandomizerForm
              processList={processList}
              employeeList={employeeList}
              selectedProcesses={selectedProcesses}
              setSelectedProcesses={handleSelectProcesses}
              selectedEmployees={selectedEmployees}
              setSelectedEmployees={setSelectedEmployees}
              setResultList={setResultList}
              isValid={isValid}
              setIsValid={setIsValid}
              errorMessage={errorMessage}
              setErrorMessage={setErrorMessage}
              handleSubmit={handleSubmit}
              isRandomizing={isRandomizing}
              reset={reset}
            />

            <ResultTable resultList={resultList} />

            {showConfetti && <Confetti />}
          </Card.Body>
        </Card>
      </Stack>
    </main>
  );
};

export default Randomizer;
