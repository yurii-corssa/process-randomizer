import { useState } from 'react';
// import db from './db.json';
import { nanoid } from 'nanoid';

const WorkerOptions = ({ workers }) => {
  return workers.map(worker => (
    <option key={nanoid()} value={worker.name} disabled={worker.disabled}>
      {worker.name}
    </option>
  ));
};

export default WorkerOptions;
