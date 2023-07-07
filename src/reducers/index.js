const initialState = {
  fields: {},
};

const rootReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case 'UPDATE_FIELD':
      return {
        ...state,
        fields: {
          ...state.fields,
          [action.payload.fieldName]: action.payload.value,
        },
      };
    default:
      return state;
  }
};

export default rootReducer;
