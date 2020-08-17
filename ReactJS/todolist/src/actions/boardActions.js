import axios from 'axios';

export function getBoards() {
  console.log('starting getBoards');
  let curBoards = {};
  return (dispatch) =>
    axios({
      method: 'GET',
      url: 'http://localhost:6001/boards/',
    })
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

export function getCurBoard(_id) {
  console.log('starting getCurBoards');
  let curBoards = {};
  return (dispatch) =>
    axios({
      method: 'GET',
      url: 'http://localhost:6001/boards/' + _id,
    })
      .then(async (res) => {
        console.log('getCurBoard: ' + res.data);
        curBoards = res.data;
        console.log(curBoards);
        dispatch({ type: 'GET_CUR_BOARD', payload: curBoards });
      })
      .catch((err) => {
        console.log('didnt work');
        console.log(err);
      });
}
