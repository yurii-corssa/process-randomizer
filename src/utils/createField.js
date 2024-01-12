const { nanoid } = require('nanoid');

export const createField = initialField => {
  return { ...initialField, id: nanoid() };
};
