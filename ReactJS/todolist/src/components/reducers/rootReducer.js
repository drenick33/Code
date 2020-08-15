const initState = {
  toDos: [],
  sharedState: {
    inputValue: '',
    canDelete: false,
    canAdd: false,
    canEdit: null,
  },
};

const rootReducer = (state = initState, action) => {
  console.log(action);
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
      };
    case 'GET_TASKS':
      return {
        ...state,
        toDos: action.payload,
      };
    case 'CHANGE_CANDELETE':
      let del = !state.sharedState.canDelete;
      return {
        ...state,
        sharedState: {
          ...state.sharedState,
          canDelete: del,
        },
      };
    case 'CHANGE_CANEDIT':
      if (state.sharedState.canEdit === action._id) {
        return {
          ...state,
          sharedState: {
            ...state.sharedState,
            canEdit: null,
          },
        };
      } else {
        return {
          ...state,
          sharedState: {
            ...state.sharedState,
            canEdit: action._id,
          },
        };
      }
    default:
      break;
  }

  return state;
};

export default rootReducer;
