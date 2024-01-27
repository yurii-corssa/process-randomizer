export const selectValue = (fields, setFields, id, value) => {
    setFields(
      fields.map(process =>
        process.id === id ? { ...process, value } : process
      )
    );
  };