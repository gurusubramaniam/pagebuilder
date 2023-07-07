export const updateField = (fieldName, value) => {
  console.log(fieldName, value);
  return {
    type: 'UPDATE_FIELD',
    payload: { fieldName, value },
  };
};
