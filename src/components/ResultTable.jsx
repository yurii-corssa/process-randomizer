import { nanoid } from 'nanoid';

const Table = ({ children }) => {
  return <div className="result-table row-gap-1">{children}</div>;
};

const Cell = ({ className, children, ...props }) => {
  const basicClasses =
    'result-cell border-bottom border-light border-opacity-25 py-1';

  return (
    <div className={`${basicClasses} ${className}`} {...props}>
      {children}
    </div>
  );
};

const Row = ({ process, employee }) => {
  return (
    <>
      <Cell key={process.id} className="px-3">
        {process.value}
      </Cell>
      <Cell key={process.id + '-'} className="text-center">
        -
      </Cell>
      <Cell key={employee.id} className="px-3">
        {employee.value}
      </Cell>
    </>
  );
};

const ResultTable = ({ resultList }) => {
  const processTitle = { id: nanoid(), value: 'Processes' };
  const employeeTitle = { id: nanoid(), value: 'Employees' };

  return (
    <Table>
      <Row process={processTitle} employee={employeeTitle} />

      {resultList.map(({ process, employee }) => {
        return <Row process={process} employee={employee} />;
      })}
    </Table>
  );
};

export default ResultTable;
