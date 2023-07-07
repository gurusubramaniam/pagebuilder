/**
 * File: ParagraphComponent.js
 * Description:
 *   This component represents a paragraph of text.
 * Props:
 *   - text: The content of the paragraph (string)
 * Example Usage:
 *   <ParagraphComponent text="This is a paragraph of text." />
 */

const ParagraphComponent = ({ text }) => {
  return <p>{text}</p>;
};

export default ParagraphComponent;
