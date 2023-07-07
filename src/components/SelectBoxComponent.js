/**
 * File: SelectBoxComponent.js
 * Description:
 *   This component renders a select dropdown element with the provided options and value.
 * Props:
 *   - label: The label/text to be displayed above the select dropdown (string)
 *   - value: The selected value of the dropdown (string or number)
 *   - options: An array of option objects with 'label' and 'value' properties (Array<{ label: string, value: string | number }>)
 *   - onChange: The event handler function for the select dropdown's onChange event (function)
 * Example Usage:
 *   <SelectBoxComponent
 *     label="Select an option"
 *     value="option1"
 *     options={[
 *       { label: "Option 1", value: "option1" },
 *       { label: "Option 2", value: "option2" },
 *       { label: "Option 3", value: "option3" }
 *     ]}
 *     onChange={(event) => console.log(event.target.value)}
 *   />
 */

const SelectBoxComponent = ({ label, options, value, onChange }) => {
  return (
    <div>
      <label htmlFor={`${value}_id`}>{label}</label>
      <select id={`${value}_id`} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectBoxComponent;
