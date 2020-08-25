import axios from 'axios';

export function getBoards() {
  console.log('starting getBoards');
  let curBoards = {};
  return (dispatch) =>
    axios(
      {
        method: 'GET',
        url: 'http://localhost:6001/boards/',
      },
      console.log('in axios')
    )
      .then(async (res) => {
        curBoards = res.data;
        console.log(curBoards);
        dispatch({ type: 'GET_BOARDS', payload: curBoards });
      })
      .catch((err) => {
        console.log('didnt work');
        console.log(err);
      });
}

//Why is it not running the network request?
export function getCurBoard(_id) {
  console.log('starting getCurBoards with id: ', _id);
  return (dispatch) =>
    axios({
      method: 'GET',
      url: 'http://localhost:6001/boards/' + _id,
    })
      .then(async (res) => {
        console.log('getCurBoard: ' + res.data);
        const curBoards = res.data;
        console.log(curBoards);
        dispatch({ type: 'GET_CUR_BOARD', payload: curBoards });
      })
      .catch((err) => {
        console.log('didnt work');
        console.log(err);
      });
}

export function createBoard(title) {
  console.log('starting createBoard');

  return (dispatch) =>
    axios({
      method: 'POST',
      url: 'http://localhost:6001/boards/',
      data: {
        title,
      },
    })
      .then(() => {
        dispatch(getBoards());
      })
      .catch((err) => {
        console.log(err);
      });
}

export function addTaskToBoard(_id, task) {
  return (dispatch) =>
    axios({
      method: 'PATCH',
      url: 'http://localhost:6001/boards/' + _id,
      data: {},
    });
}
