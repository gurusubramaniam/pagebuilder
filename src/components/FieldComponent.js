/**
 * File: FieldComponent.js
 * Description:
 *   This component represents an input field.
 * Props:
 *   - name: The name of the field (string)
 *   - type: The type of the input field (string)
 *   - value: The current value of the input field (string)
 * Example Usage:
 *   <FieldComponent name="username" type="text" value={username} />
 */

const FieldComponent = ({ name, type, value, onChange }) => {
  return (
    <div>
      <label htmlFor={`${name}_id`}>{name}</label>
      <input type={type} id={`${name}_id`} value={value} onChange={onChange} />
    </div>
  );
};

export default FieldComponent;
