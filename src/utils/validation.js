import { messages } from 'messages';

export const lang = 'en';

export const validateProcesses = selectedProcesses => {
  if (selectedProcesses.length === 0) return messages[lang].required;
  return null;
};

export const validateEmployees = (selectedEmployees, selectedProcesses) => {
  const processCount = selectedProcesses.length;
  const employeeCount = selectedEmployees.length;

  if (employeeCount === 0) return messages[lang].required;

  const uniqueEmployees = new Set(selectedEmployees.map(({ value }) => value));

  if (uniqueEmployees.size < employeeCount) return messages[lang].notUnique;

  if (employeeCount < 2) return messages[lang].oneProcessMinTwoEmployees;

  if (processCount > employeeCount)
    return messages[lang].multiProcessMinEmployees(processCount);

  return null;
};
