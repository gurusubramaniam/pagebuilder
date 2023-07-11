/**
 * File: ButtonComponent.js
 * Description:
 *   This component renders a button element with the provided label and onClick event handler.
 * Props:
 *   - label: The label/text to be displayed on the button (string)
 *   - onClick: The event handler function for the button's onClick event (function)
 * Example Usage:
 *   <ButtonComponent label="Click me" onClick={() => console.log('Button clicked!')} />
 */

const ButtonComponent = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};

export default ButtonComponent;
