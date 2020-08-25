import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../../actions/todoActions';
import { getBoards } from '../../actions/boardActions';
import { get } from 'lodash';

class TaskForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { inputValue: '', boardValue: '' };
  }

  componentDidMount() {
    this.props.getAllBoards();
  }

  inputOnChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  boardOnChange = (e) => {
    this.setState({ boardValue: e.target.value });
    console.log(e.target.value);
  };

  submit = () => {
    if (this.state.inputValue && this.state.boardValue) {
      //prevent empty strings
      this.props.addTask(this.state.inputValue, this.state.boardValue);
    }
    this.setState({
      inputValue: '',
      canAdd: false,
    });
  };

  mayDelete = () => {
    this.props.letDelete();
  };

  // mayAdd = () => {
  //   this.setState({ canAdd: !this.state.canAdd });
  // };

  render() {
    console.log('This.props.boards is: ', this.props.boards);
    return (
      <div className="container pb-5">
        <h4 className="pt-4">Add New Task</h4>
        <div>
          <input
            type="text"
            autoFocus
            value={this.state.inputValue}
            onChange={this.inputOnChange}
          ></input>
          <select onChange={this.boardOnChange}>
            {get(this.props, 'boards', []).map((
              el //get is from lodash, use empty array if undefined
            ) => (
              <option key={el._id} value={el._id}>
                {el.title}
              </option>
            ))}
          </select>
          <button onClick={this.submit}>+ Add</button>
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
    boards: state.boards,
  };
};

//Delete using Redux
const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (todoName, todoBoard) => dispatch(addTask(todoName, todoBoard)),
    letDelete: () => {
      dispatch({ type: 'CHANGE_CANDELETE' });
    },
    getAllBoards: () => dispatch(getBoards()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
