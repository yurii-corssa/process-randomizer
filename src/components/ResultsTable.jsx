import TableItem from './TableItem';

const ResultsTable = ({ data }) => {
  return (
    <table className="table table-striped table-hover table-bordered w-50">
      <thead>
        <tr>
          <th scope="col">Process</th>
          <th scope="col">Worker</th>
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
