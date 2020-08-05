import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Calendar } from 'react-bootstrap-icons';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: '' };
  }

  state = {
    inputValue: '',
    canDelete: false,
    canAdd: false,
  };

  inputOnChange = (e) => {
    this.setState({ inputValue: e.target.value });
    console.log(this.state.inputValue);
  };
  //called by delete
  removeTask = (_id) => {
    //console.log(_id);
    this.props.deleteTask(_id);
    this.setState({ canDelete: false });
  };

  completeTask = (_id, done) => {
    console.log('finish');
    this.props.finishTask(_id, done);
  };

  submit = (title) => {
    console.log(title);
    if (title) {
      //prevent empty strings
      this.props.addTask(title);
    }
    this.setState({
      inputValue: '',
      canAdd: false,
    });
  };

  mayDelete = () => {
    this.setState({ canDelete: !this.state.canDelete });
  };

  mayAdd = () => {
    this.setState({ canAdd: !this.state.canAdd });
  };

  render() {
    const Task = this.props.toDos;
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark shadow">
          <Calendar color="white" size="32px" className=""></Calendar>
        </nav>
        <div className="container">
          <div class="row justify-content-initial">
            <div class="col-7">
              <h2 className="pt-3">To Do List:</h2>
              {Task.map((el) => (
                <div key={el._id}>
                  <div className="container bg-warning shadow my-4">
                    <div className="row-10">
                      {el.done ? (
                        <div className="pt-5">
                          <input
                            type="checkbox"
                            className="big-checkbox"
                            onClick={() => this.completeTask(el._id, el.done)}
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
                            onClick={() => this.completeTask(el._id, el.done)}
                          />
                          <label className="pb-4 pl-5 font-weight-bolder">
                            {el.title}
                          </label>
                        </div>
                      )}
                      {this.state.canDelete ? (
                        <button
                          className="item bg-light"
                          onClick={() => this.removeTask(el._id)}
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
                {this.state.canAdd ? (
                  <div>
                    <input
                      type="text"
                      autoFocus
                      value={this.state.inputValue}
                      onChange={this.inputOnChange}
                    ></input>
                    <button onClick={() => this.submit(this.state.inputValue)}>
                      + Add
                    </button>
                    <button onClick={() => this.mayAdd()}>Cancel</button>
                  </div>
                ) : (
                  <div>
                    <button onClick={() => this.mayAdd()}>+ Create Task</button>
                    <input type="text" className="invisible"></input>
                  </div>
                )}

                <div className="item"></div>
                <div>
                  <button onClick={this.mayDelete}>- Delete Task</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//Tie Redux to state
const mapStateToProps = (state) => {
  //add ToDos from redux to props
  return {
    toDos: state.toDos,
  };
};

//Delete using Redux
const mapDispatchToProps = (dispatch) => {
  return {
    deleteTask: (_id) => {
      //console.log(_id);
      dispatch({ type: 'DELETE_TASK', _id: _id });
    },
    finishTask: (_id, done) => {
      // console.log(_id);
      dispatch({ type: 'FINISH_TASK', _id: _id, done: done });
    },
    addTask: (title) => {
      console.log(title);
      dispatch({ type: 'ADD_TASK', title: title });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
