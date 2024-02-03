import { Table } from 'react-bootstrap';
import TableItem from './TableItem';

const ResultsTable = ({ data }) => {
  return (
    <div className="table-wrapper">
      <Table striped hover id="table">
        <thead>
          <tr>
            <th>Processes</th>
            <th>Employees</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ process, worker }) => {
            return <TableItem key={worker} process={process} worker={worker} />;
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default ResultsTable;
