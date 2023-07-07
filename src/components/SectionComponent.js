/**
 * File: SectionComponent.js
 * Description:
 *   This component represents a section with a title and children components.
 * Props:
 *   - title: The title of the section (string)
 *   - children: An array of child components to render within the section (Array<React.Component>)
 *   - dispatch: A function for dispatching actions to update the Redux store (function)
 *   - fieldState: The current state of the fields in the Redux store (object)
 * Example Usage:
 *   <SectionComponent
 *     title="Section Title"
 *     dispatch={dispatch}
 *     fieldState={fieldState}
 *   >
 *     <ParagraphComponent text="This is a paragraph inside a section." />
 *     <ButtonComponent label="Submit" />
 *   </SectionComponent>
 */

import * as components from '../components';
import { updateField } from '../actions';

const SectionComponent = ({ title, children, dispatch, fieldState }) => {
  // TODO : Need to move this to common file since this is reused in app.js
  const componentsMap = {
    button: components.ButtonComponent,
    checkbox: components.CheckboxComponent,
    radio: components.RadioButtonComponent,
    select: components.SelectBoxComponent,
    paragraph: components.ParagraphComponent,
    section: components.SectionComponent,
    article: components.ArticleComponent,
    tabs: components.TabsComponent,
    text: components.FieldComponent,
    email: components.FieldComponent,
    phone: components.FieldComponent,
    number: components.FieldComponent,
  };
  const handleFieldChange = (fieldName, value) => {
    dispatch(updateField(fieldName, value));
  };
  // TODO : Need to move this to common file since this is reused in app.js
  const renderField = (field) => {
    const { type, ...rest } = field;
    const Component = componentsMap[type];
    if (Component) {
      return (
        <Component
          key={field.name}
          value={fieldState[field.name]}
          onChange={(value) => handleFieldChange(field.name, value)}
          {...rest}
        />
      );
    }
    return null;
  };

  return (
    <section>
      <h2>{title}</h2>
      {children.map((child, index) => (
        <div key={index}>{renderField(child)}</div>
      ))}
    </section>
  );
};

export default SectionComponent;
