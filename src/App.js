import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import config from './config.json';
import { updateField } from './actions';
import * as components from './components';

const App = () => {
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
  const fieldState = useSelector((state) => state.fields || {});
  const dispatch = useDispatch();

  const handleFieldChange = (event, fieldName) => {
    const value =
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value;
    dispatch(updateField(fieldName, value));
  };

  const renderField = (field, index) => {
    const { type, ...rest } = field;
    const Component = componentsMap[type];
    if (Component) {
      return (
        <Component
          key={`${field.name}_${index}`}
          value={fieldState[field.name]}
          onChange={(event) => handleFieldChange(event, field.name)}
          {...rest}
          dispatch
          fieldState
        />
      );
    }
    return null;
  };

  const renderFields = () => {
    return config.map((field, index) => renderField(field, index));
  };

  return <div>{renderFields()}</div>;
};

export default App;
