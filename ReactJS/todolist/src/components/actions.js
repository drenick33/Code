import axios from 'axios';

//asynchrious code in actions, not reducer

export function addTask(todoName) {
  return (dispatch) =>
    axios({
      method: 'POST',
      url: 'http://localhost:6001/todos/',
      data: {
        title: todoName,
        done: false,
      },
    })
      .then(() => {
        dispatch(getTasks());
      })
      .catch((err) => {
        console.log(err);
      });
}

export function getTasks() {
  return (dispatch) =>
    axios({
      method: 'GET',
      url: 'http://localhost:6001/todos/',
    })
      .then((res) => {
        dispatch({ type: 'GET_TASKS', payload: res.data.todos });
      })
      .catch((err) => {
        console.log(err);
      });
}

export function deleteTask(_id) {
  return (dispatch) =>
    axios({
      method: 'DELETE',
      url: 'http://localhost:6001/todos/' + _id,
      data: {
        _id,
      },
    })
      .then(() => {
        dispatch(getTasks());
      })
      .catch((err) => {
        console.log(err);
      });
}

export function finishTask(_id, done) {
  return (dispatch) =>
    axios({
      method: 'PATCH',
      url: 'http://localhost:6001/todos/' + _id,
      data: {
        done: !done,
      },
    })
      .then(() => {
        dispatch(getTasks());
      })
      .catch((err) => {
        console.log(err);
      });
}

export function editTask(_id, title) {
  return (dispatch) =>
    axios
      .patch('http://localhost:6001/todos/' + _id, {
        title: title, //@TODO switch to add name
      })
      .then(() => {
        dispatch(getTasks());
      })
      .catch((err) => {
        console.log(err);
      });
}
