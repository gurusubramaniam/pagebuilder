/**
 * File: CheckboxComponent.js
 * Description:
 *   This component renders a checkbox input with the provided label and checked state.
 * Props:
 *   - label: The label/text to be displayed next to the checkbox (string)
 *   - checked: The checked state of the checkbox (boolean)
 *   - onChange: The event handler function for the checkbox's onChange event (function)
 * Example Usage:
 *   <CheckboxComponent label="Check me" checked={true} onChange={(event) => console.log(event.target.checked)} />
 */

const CheckboxComponent = ({ label, checked, name, onChange }) => {
  return (
    <div>
      <label htmlFor={`${name}_id`}>{label}</label>
      <input
        type="checkbox"
        id={`${name}_id`}
        checked={checked}
        onChange={onChange}
      />
    </div>
  );
};

export default CheckboxComponent;
