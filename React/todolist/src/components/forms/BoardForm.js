import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { createBoard } from '../../actions/boardActions';

class BoardForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { inputValue: '' };
  }

  inputOnChange = (e) => {
    e.persist();
    this.setState({ inputValue: e.target.value });
  };

  submit = () => {
    console.log('inputValue is: ', this.state.inputValue);
    this.props.makeBoard(this.state.inputValue);
    this.setState({
      inputValue: '',
    });
  };

  render() {
    return (
      <div className="text-center">
        <h4 className="pt-4">Add New Board</h4>
        <input
          value={this.state.inputValue}
          onChange={this.inputOnChange}
        ></input>
        <button onClick={this.submit}>Create Board</button>
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
    makeBoard: (title) => dispatch(createBoard(title)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardForm);
