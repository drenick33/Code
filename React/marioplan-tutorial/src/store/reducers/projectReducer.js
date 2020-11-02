const initState = {
  projects: [
    {
      id: 1,
      title: 'Chew Bubblegum and Kick Ass',
      content: 'I ran out of bubblegum',
    },
    {
      id: 2,
      title: 'Kiss Sasha',
      content: 'Constantly',
    },
    {
      id: 3,
      title: 'Play Mapplestory',
      content: "It's addictive",
    },
  ],
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('Created Project, ', action.project);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
