const TableItem = ({ process, worker }) => {
  return (
    <tr>
      <td>{process}</td>
      <td>{worker}</td>
    </tr>
  );
};

export default TableItem;
