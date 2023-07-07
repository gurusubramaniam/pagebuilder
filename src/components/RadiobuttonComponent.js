/**
 * File: RadioButtonComponent.js
 * Description:
 *   This component renders a radio button input with the provided label, value, and checked state.
 * Props:
 *   - label: The label/text to be displayed next to the radio button (string)
 *   - value: The value of the radio button (string or number)
 *   - checked: The checked state of the radio button (boolean)
 *   - onChange: The event handler function for the radio button's onChange event (function)
 * Example Usage:
 *   <RadioButtonComponent label="Option 1" value="option1" checked={true} onChange={(event) => console.log(event.target.value)} />
 */

const RadioButtonComponent = ({ label, value, name, checked, onChange }) => {
  return (
    <div>
      <label htmlFor={`${name}_${label}`}>{label}</label>
      <input
        type="radio"
        name={name}
        id={`${name}_${label}`}
        value={value}
        checked={checked}
        onChange={onChange}
      />
    </div>
  );
};

export default RadioButtonComponent;
