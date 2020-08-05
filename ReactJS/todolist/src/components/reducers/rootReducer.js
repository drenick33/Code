const initState = {
  toDos: [
    {
      title: 'Learn Redux',
      done: false,
      _id: Math.random(),
    },
    {
      title: 'Learn Bootstrap',
      done: false,
      _id: Math.random(),
    },
    {
      title: 'Learn Reducers',
      done: false,
      _id: Math.random(),
    },
  ],
};

const rootReducer = (state = initState, action) => {
  console.log(action);
  switch (action.type) {
    case 'DELETE_TASK':
      let newToDos = state.toDos.filter((toDo) => {
        return action._id !== toDo._id;
      });
      return {
        ...state,
        toDos: newToDos,
      };
    case 'FINISH_TASK':
      const ut = state.toDos.map((el) => {
        if (el._id === action._id) {
          console.log(el._done);
          return {
            title: el.title,
            _id: el._id,
            done: !el.done,
          };
        }
        return el;
      });
      console.log(ut);
      return {
        ...state,
        toDos: ut,
      };
    case 'ADD_TASK':
      return {
        ...state,
        toDos: state.toDos.concat({
          title: action.title,
          done: false,
          _id: Math.random(),
        }),
      };
    default:
      break;
  }

  return state;
};

export default rootReducer;
