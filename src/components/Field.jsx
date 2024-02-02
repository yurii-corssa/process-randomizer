import { selectValue } from 'utils/selectValue';
import FieldOptions from './FieldOptions';
import { LuTrash, LuChevronDown } from 'react-icons/lu';
import { deleteField } from 'utils/deleteField';
import {
  Button,
  DropdownButton,
  FormControl,
  InputGroup,
} from 'react-bootstrap';

const Field = ({
  label,
  id,
  value,
  data,
  fields,
  setFields,
  isLastField,
  isUniqueData,
  disabled,
}) => {
  const handleWriteChange = e => {
    selectValue(fields, setFields, id, e.target.value);
  };

  const handleSelectValue = value => {
    selectValue(fields, setFields, id, value);
  };

  return (
    <InputGroup className="mb-2">
      <FormControl
        type="text"
        placeholder={label}
        aria-label={label}
        value={value}
        disabled={disabled}
        onChange={handleWriteChange}
      />
      <DropdownButton
        id="input-group-dropdown-1"
        variant="outline-secondary"
        disabled={disabled}
        title={<LuChevronDown />}
      >
        <FieldOptions
          options={data}
          fields={fields ? fields : []}
          isUniqueData={isUniqueData}
          onSelect={handleSelectValue}
        />
      </DropdownButton>

      <Button
        variant="outline-secondary"
        onClick={() => deleteField(fields, setFields, id, value)}
        disabled={isLastField || disabled}
      >
        <LuTrash />
      </Button>
    </InputGroup>
  );
};

export default Field;
