import { Table } from 'react-bootstrap';
import TableItem from './TableItem';

const ResultsTable = ({ data }) => {
  return (
    <Table striped hover>
      <thead>
        <tr>
          <th>Process</th>
          <th>Worker</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ process, worker }) => {
          return <TableItem key={worker} process={process} worker={worker} />;
        })}
      </tbody>
    </Table>
  );
};

export default ResultsTable;
