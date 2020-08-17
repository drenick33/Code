import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions/todoActions';

class TaskForum extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { inputValue: '' };
  }

  inputOnChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  submit = (title) => {
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
    this.props.letDelete();
  };

  mayAdd = () => {
    this.setState({ canAdd: !this.state.canAdd });
  };

  render() {
    return (
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
          <button onClick={this.getList}>UPDATE NOW</button>
        </div>
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
const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (todoName) => dispatch(addTask(todoName)),
    letDelete: () => {
      dispatch({ type: 'CHANGE_CANDELETE' });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskForum);
