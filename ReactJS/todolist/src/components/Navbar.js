import { Calendar } from 'react-bootstrap-icons';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getBoards } from '../actions/boardActions';
import axios from 'axios';
import './Navbar.css';

class Navbar extends Component {
  componentDidMount() {
    getBoards();
    this.getList();
  }

  mayDelete = () => {
    this.props.letDelete();
  };

  getList = () => {
    console.log('running getList for Boards');
    let curTasks = {};
    axios({
      method: 'GET',
      url: 'http://localhost:6001/boards',
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
    console.log('info is: ', this.props.boards);
    return (
      <div>
        <nav className="navbar navbar-dark navi bg-dark shadow">
          <Link to="/">
            <Calendar color="white" size="32px" className=""></Calendar>
          </Link>
          {this.props.boards.map((el) => (
            <div key={el._id}>
              <Link to={'/' + el._id}>
                <span>{el.title}</span>
              </Link>
            </div>
          ))}
          <button onClick={() => this.mayDelete()}>Delete</button>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //add ToDos from redux to props
  return {
    sharedState: state.sharedState,
    boards: state.boards,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getBoard: (curTasks) => {
      console.log('getBoard');
      console.log(curTasks);
      dispatch({ type: 'GET_BOARDS', payload: curTasks });
    },
    letDelete: () => {
      dispatch({ type: 'CHANGE_CANDELETE' });
    },
  };
};

// function Navbar() {

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
