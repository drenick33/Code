import React, { Component } from 'react';
import NavBar from '../Navbar';
import axios from 'axios';

import { connect } from 'react-redux';
//import { getBoards } from '../../actions/boardActions';
import { getCurBoard } from '../../actions/boardActions';

class Board extends Component {
  state = {
    id: null,
  };

  componentDidMount() {
    this.setState({
      id: this.props.match.params.board_id,
    });
    this.setState({ id: this.props.match.params.board_id });

    console.log(this.props.match.params.board_id);
    console.log(this.state);
    this.getBoard();
    //this.getList();
  }

  getBoard = (_id) => {
    getCurBoard(this.state.id);
  };

  getList = () => {
    console.log('running getList for Boards');
    let curTasks = {};
    axios({
      method: 'GET',
      url: 'http://localhost:6001/boards/' + this.props.match.params.board_id,
    })
      .then(async (res) => {
        curTasks = res.data;
        console.log(curTasks);
        console.log('entering getBoard');
        this.props.getBoard(curTasks);
      })
      .catch((err) => {
        console.log('ran error');
        console.log(err);
      });
  };

  render() {
    const id = this.state.id;
    return (
      <div>
        <NavBar></NavBar>
        <div className="container">
          <h4>{id}</h4>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   //add ToDos from redux to props
//   return {
//     boards: state.boards,
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    getBoard: (curTasks) => {
      console.log('getBoard');
      console.log(curTasks);
      dispatch({ type: 'GET_BOARDS', payload: curTasks });
    },
  };
};

// function Navbar() {

export default connect(mapDispatchToProps)(Board);
