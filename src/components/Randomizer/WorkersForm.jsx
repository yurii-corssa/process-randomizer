import { nanoid } from 'nanoid';
// import { useState } from 'react';
import SelectWorker from './SelectWorker.jsx';
import { useState } from 'react';
import Field from './Field.jsx';

const WorkersForm = ({ data, selectedWorkers, setSelectedWorkers }) => {
  const [fieldCount, setFieldCount] = useState([0]);
  const [allWorkers, setAllWorkers] = useState(data);

  const addField = () => {
    setFieldCount(fields => [...fields, 1]);
  };

  const handleSelectChange = value => {
    // setSelectedWorkers(
    //   selectedWorkers.map((elem, i) => {
    //     if (i === index) {
    //       return value;
    //     }
    //     return elem;
    //   })
    // );
    // setAllWorkers(allWorkers.filter(worker => worker !== value));
    // console.log(allWorkers);
  };

  return (
    <>
      {/* {fieldCount.map((_, index) => {
        return (
          <SelectWorker
            key={nanoid()}
            index={index}
            // value={worker}
            onChange={handleSelectChange}
            allWorkers={allWorkers}
            setAllWorkers={setAllWorkers}
          />
        );
      })} */}
      <Field data={allWorkers} />
      <button type="button" onClick={addField}>
        +
      </button>
    </>
  );
};

export default WorkersForm;
