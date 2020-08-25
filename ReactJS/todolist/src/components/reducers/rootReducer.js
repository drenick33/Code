const initState = {
  toDos: [],
  boards: [],
  curBoard: [],
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
    //BOARDS SECTION
    //@TODO LOOK INTO COMBINE REDUCERS

    case 'GET_BOARDS':
      console.log('in GET_BOARDS');
      console.log('Payload is: ', action.payload);
      return {
        ...state,
        boards: action.payload,
      };

    case 'GET_CUR_BOARD':
      console.log('in GET_CUR_BOARDS');
      console.log('curBoard will be: ', action.payload);
      return {
        ...state,
        curBoard: action.payload,
      };

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
