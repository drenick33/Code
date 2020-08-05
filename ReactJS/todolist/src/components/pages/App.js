import React, { useState } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Home from './Home';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [toDos, setToDos] = useState([
    {
      title: 'Learn React',
      done: false,
      id: 1,
    },
    {
      title: 'Learn CSS',
      done: true,
      id: 2,
    },
  ]);

  const submit = (e) => {
    console.log('Works');
    e.preventDefault();
    setToDos([
      ...toDos,
      {
        title: inputValue,
        done: false,
        id: Math.random(),
      },
    ]);
    setInputValue('');
  };

  const inputOnChange = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };

  const changeStatus = (id) => {
    console.log(id);

    const ut = toDos.map((el) => {
      if (el.id === id) {
        return { ...el, done: !el.done };
      }
      return el;
    });
    setToDos(ut);
    console.log(ut);
  };

  return (
    <div className="App">
      <Home></Home>
      <form onSubmit={submit}>
        <input type="text" value={inputValue} onChange={inputOnChange}></input>
        <button type="submit">Add</button>
      </form>
      {toDos.map((el) => (
        <li>
          {el.title} {el.done ? 'Finished' : 'Unfinished'}
          <button onClick={() => changeStatus(el.id)}>Done</button>
        </li>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    toDos: state.toDos,
  };
};

export default connect(mapStateToProps)(App);
