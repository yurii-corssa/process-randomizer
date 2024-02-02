export const deleteField = (fields, setFields, id) => {
    setFields(fields.filter(process => process.id !== id));
  };