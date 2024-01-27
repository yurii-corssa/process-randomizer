import { addField } from "./addField";
import { createField } from "./createField";

export const toggleCheckbox = (fields, setFields, value) => {
    const isChecked = fields.some(field => field.value === value);

    if (isChecked) {
      return setFields(prev => {
        const newArr = prev.filter(field => field.value !== value);
        if (!newArr.length) {
          const emptyField = createField();

          return [emptyField];
        }
        return newArr;
      });
    } else {
      return addField(setFields, { value });
    }
  };