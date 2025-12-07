import { Form } from 'react-bootstrap';
import FormButtons from './FormButtons';
import ComboInput from './ComboInput';

const DistributionForm = ({
  processList,
  employeeList,
  selectedProcesses,
  setSelectedProcesses,
  selectedEmployees,
  setSelectedEmployees,
  isValid,
  setIsValid,
  errorMessage,
  setErrorMessage,
  handleSubmit,
  isRandomizing,
  reset,
}) => {
  const setIsValidProcess = process => {
    setIsValid(prev => ({ ...prev, process }));
  };

  const setIsValidEmployee = employee => {
    setIsValid(prev => ({ ...prev, employee }));
  };

  const setErrorMessageProcess = process => {
    setErrorMessage(prev => ({ ...prev, process }));
  };

  const setErrorMessageEmployee = employee => {
    setErrorMessage(prev => ({ ...prev, employee }));
  };

  return (
    <>
      <Form
        id="randomForm"
        onSubmit={handleSubmit}
        className="d-grid gap-3 mb-3"
      >
        <Form.Group>
          <Form.Label>Processes</Form.Label>

          <ComboInput
            id="process-combo-input"
            name="process"
            placeholder="Select one or more processes..."
            newSelectionPrefix="New process: "
            options={processList}
            selected={selectedProcesses}
            setSelected={setSelectedProcesses}
            isValid={isValid.process && !errorMessage.process}
            setIsValid={setIsValidProcess}
            isInvalid={!isValid.process && !!errorMessage.process}
            setErrorMessage={setErrorMessageProcess}
            disabled={isRandomizing}
          />
          <Form.Control.Feedback className="px-2" type="invalid">
            {errorMessage.process}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label>Employees</Form.Label>
          <ComboInput
            id="employee-combo-input"
            name="employee"
            placeholder="Select multiple employees but no less than processes..."
            newSelectionPrefix="New employee: "
            options={employeeList}
            selected={selectedEmployees}
            setSelected={setSelectedEmployees}
            isValid={isValid.employee && !errorMessage.employee}
            setIsValid={setIsValidEmployee}
            isInvalid={!isValid.employee && !!errorMessage.employee}
            setErrorMessage={setErrorMessageEmployee}
            disabled={isRandomizing}
          />
          <Form.Control.Feedback className="px-2" type="invalid">
            {errorMessage.employee}
          </Form.Control.Feedback>
        </Form.Group>
      </Form>

      <FormButtons reset={reset} isRandomizing={isRandomizing} />
    </>
  );
};

export default DistributionForm;
