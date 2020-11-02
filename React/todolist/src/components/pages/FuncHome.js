import React from 'react';
import { connect } from 'react-redux';
import { Calendar } from 'react-bootstrap-icons';
import './Home.css';
import { useState } from 'react';

function Home(props) {
  //Cannot use constructor in functional components
  // constructor(props) {
  //   super(props);
  //   this.state = { inputValue: '' };
  // // }

  // state = {
  //   inputValue: '',
  //   canDelete: false,
  //   canAdd: false,
  // };

  //hooks for functional component
  const [inputValue, setInputValue] = useState('');
  const [canDelete, setCanDelete] = useState(false);
  const [canAdd, setCanAdd] = useState(false);

  //properties should be functions
  const inputOnChange = (e) => {
    setInputValue(e.target.value);
  };
  //called by delete
  const removetasks = (_id) => {
    //console.log(_id);
    props.deletetasks(_id);
    setCanDelete(false);
  };

  const completetasks = (_id, done) => {
    props.finishtasks(_id, done);
  };

  const submit = (title) => {
    console.log(title);
    if (title) {
      //prevent empty strings
      props.addtasks(title);
    }
    setInputValue('');
    setCanDelete(false);
  };

  const mayDelete = () => {
    setCanDelete(!canDelete);
  };

  const mayAdd = () => {
    setCanAdd(!canAdd);
  };
  const tasks = props.toDos;
  console.log(tasks);
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark shadow">
        <Calendar color="white" size="32px" className=""></Calendar>
      </nav>
      <div className="container">
        <div class="row justify-content-initial">
          <div class="col-7">
            <h2 className="pt-3">To Do List:</h2>
            {tasks.map((el) => (
              <div key={el._id}>
                <div className="container bg-warning shadow my-4">
                  <div className="row-10">
                    {el.done ? (
                      <div className="pt-5">
                        <input
                          type="checkbox"
                          className="big-checkbox"
                          onClick={() => completetasks(el._id, el.done)}
                        />
                        <label className="cross pb-4 pl-5 font-weight-bolder">
                          {el.title}
                        </label>
                      </div>
                    ) : (
                      <div className="pt-5">
                        <input
                          type="checkbox"
                          className="big-checkbox"
                          onClick={() => completetasks(el._id, el.done)}
                        />
                        <label className="pb-4 pl-5 font-weight-bolder">
                          {el.title}
                        </label>
                      </div>
                    )}
                    {canDelete ? (
                      <button
                        className="item bg-light"
                        onClick={() => removetasks(el._id)}
                      >
                        Delete
                      </button>
                    ) : (
                      <button className="item invisible">Delete</button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-5 padded">
            <div className="container pb-5">
              {canAdd ? (
                <div>
                  <input
                    type="text"
                    autoFocus
                    value={inputValue}
                    onChange={inputOnChange}
                  ></input>
                  <button onClick={() => submit(inputValue)}>+ Add</button>
                  <button onClick={() => mayAdd()}>Cancel</button>
                </div>
              ) : (
                <div>
                  <button onClick={() => mayAdd()}>+ Create tasks</button>
                  <input type="text" className="invisible"></input>
                </div>
              )}

              <div className="item"></div>
              <div>
                <button onClick={mayDelete}>- Delete tasks</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

//Tie Redux to state
const mapStateToProps = (state) => {
  //add ToDos from redux to props
  return {
    toDos: state.toDos,
  };
};

//Delete using Redux
//!**ONE DIRECITON DATAFLOW!**
//invoke changes with action
//reducers check with switch case
const mapDispatchToProps = (dispatch) => {
  return {
    deletetasks: (_id) => {
      console.log(_id);
      dispatch({ type: 'DELETE_tasks', _id: _id });
    },
    finishtasks: (_id, done) => {
      console.log(_id);
      dispatch({ type: 'FINISH_tasks', _id: _id, done: done });
    },
    addtasks: (title) => {
      console.log(title);
      dispatch({ type: 'ADD_tasks', title: title });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
