import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTask, finishTask, editTask } from '../actions/todoActions';
import './TaskList.css';
import { ArrowDownCircleFill, ArrowUpCircleFill } from 'react-bootstrap-icons';

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = { nameValue: '' };
  }

  //called by delete
  removeTask = async (_id) => {
    console.log('running removeTask');
    this.props.letDelete();
    this.props.deleteTask(_id);
  };

  completeTask = (_id, done) => {
    this.props.finishTask(_id, done);
    // this.getList();
  };

  makeEdit(_id) {
    console.log('runs makeEdit');
    this.props.letEdit(_id);
  }

  inputOnChange = (e) => {
    this.setState({ nameValue: e.target.value });
  };

  submit = async (_id, title) => {
    console.log(title);
    if (title) {
      //prevent empty strings
      await this.props.editTask(_id, title);
      //this.props.addTask(title);
    }
    this.setState({
      nameValue: '',
      //canAdd: false,
    });
    await this.props.letEdit(_id); //remove forum
  };

  render() {
    const Task = this.props.toDos;
    return (
      <div>
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
                      defaultChecked="el.done"
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
                <div className="row">
                  {this.props.sharedState.canDelete ? (
                    <button
                      className="item bg-light"
                      onClick={() => this.removeTask(el._id)}
                    >
                      Delete
                    </button>
                  ) : (
                    <button className="item invisible">Delete</button>
                  )}
                  <div>
                    <button
                      type="button"
                      onClick={() => this.makeEdit(el._id)}
                      className="item bg-light"
                    >
                      Edit
                    </button>
                    {this.props.sharedState.canEdit === el._id ? (
                      <input
                        type="text"
                        autoFocus
                        value={this.state.nameValue}
                        onChange={this.inputOnChange}
                      ></input>
                    ) : (
                      <input
                        type="text"
                        autoFocus
                        className="invisible"
                      ></input>
                    )}
                    {this.props.sharedState.canEdit === el._id ? (
                      <button
                        type="button"
                        onClick={() =>
                          this.submit(el._id, this.state.nameValue)
                        }
                        className="item bg-light"
                      >
                        Update
                      </button>
                    ) : (
                      <button type="button" className="invisible">
                        Update
                      </button>
                    )}
                    <div class="btn-group btn-group-vertical">
                      <ArrowUpCircleFill
                        size="32px"
                        onClick={() => console.log('up')}
                        fill="bg-light"
                        className="mb-1"
                      ></ArrowUpCircleFill>
                      <ArrowDownCircleFill
                        size="32px"
                        onClick={() => console.log('down')}
                      ></ArrowDownCircleFill>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //add ToDos from redux to props
  return {
    toDos: state.toDos,
    sharedState: state.sharedState,
  };
};

//Delete using Redux
// component => actions => reducer
const mapDispatchToProps = (dispatch) => {
  return {
    deleteTask: (_id) => dispatch(deleteTask(_id)),
    finishTask: (_id, done) => dispatch(finishTask(_id, done)),
    editTask: (_id, title) => dispatch(editTask(_id, title)),
    letDelete: () => dispatch({ type: 'CHANGE_CANDELETE' }),
    letEdit: (_id) => dispatch({ type: 'CHANGE_CANEDIT', _id: _id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
