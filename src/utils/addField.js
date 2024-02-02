import { createField } from './createField';

export const addField = (setFields, data = { value: '' }) => {
  const newField = createField(data);

  setFields(prev => {
    const emptyField = prev.find(el => !el.value);

    if (emptyField && newField.value) {
      return prev.map(field => {
        return field.id === emptyField.id ? newField : field;
      });
    }

    return [...prev, newField];
  });
};
