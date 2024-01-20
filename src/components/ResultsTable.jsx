import TableItem from './TableItem';

const ResultsTable = ({ data }) => {
  return (
    <table className="table table-striped table-hover">
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
    </table>
  );
};

export default ResultsTable;
