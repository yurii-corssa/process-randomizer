import { useState } from 'react';
import SelectProcces from './SelectProcces';
import { nanoid } from 'nanoid';

const ProcessesForm = ({ data, selectedValues, setSelectedValues }) => {
  const [selectIds, setSelectIds] = useState([]);

  const addSelect = () => {
    const newId = nanoid();
    setSelectIds(ids => [...ids, newId]);
    setSelectedValues(values => ({
      ...values,
      [newId]: { process: null, workers: null },
    }));
  };

  const handleSelectChange = (id, value) => {
    setSelectedValues(values => ({
      ...values,
      [id]: { process: value, workers: null },
    }));
  };

  return (
    <>
      {selectIds.map(id => (
        <SelectProcces
          key={id}
          id={id}
          value={selectedValues[id].process || ''}
          onChange={handleSelectChange}
          processes={data.processes}
        />
      ))}
      <button type="button" onClick={addSelect}>
        +
      </button>
    </>
  );
};

export default ProcessesForm;
