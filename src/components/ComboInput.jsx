import { useRef } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';

const ComboInput = ({ setSelected, setIsValid, setErrorMessage, ...props }) => {
  const inputRef = useRef(null);

  const enterText = () => {
    const { state } = inputRef.current;

    let value = state.text.trim();

    if (!value.length) return;
    if (value.length > 50) value = value.slice(0, 5) + '...';

    state.text = '';
    setSelected([...state.selected, { value }]);
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      enterText();
    }
  };

  const onFocus = () => {
    setErrorMessage(null);
    setIsValid(false);
  };

  return (
    <Typeahead
      multiple
      allowNew
      labelKey="value"
      onChange={setSelected}
      ref={inputRef}
      onKeyDown={handleKeyDown}
      onBlur={enterText}
      onFocus={onFocus}
      {...props}
    />
  );
};

export default ComboInput;
