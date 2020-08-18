import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Home.css';
import axios from 'axios';
import '../TaskList';
import TaskList from '../TaskList';
import TaskForm from '../TaskForm';
import Loading from '../Loading';
import Navbar from '../Navbar';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      isLoading: true,
    };
  }

  componentDidMount() {
    this.getList();
  }

  // componentDidUpdate() {
  //   this.getList();
  // }

  getList = () => {
    console.log('running getList');
    this.setState({ isLoading: true });
    let curTasks = {};
    axios({
      method: 'GET',
      url: 'http://localhost:6001/todos',
    })
      .then(async (res) => {
        curTasks = res.data;
        console.log(curTasks);
        console.log('entering getTasks');
        this.props.getTasks(curTasks);
        this.setState({ isLoading: false });
      })
      .catch((err) => {
        console.log('ran error');
        console.log(err);
      });
  };

  inputOnChange = (e) => {
    this.setState({ inputValue: e.target.value });
    console.log(this.state.inputValue);
  };
  //called by delete
  removeTask = (_id) => {
    console.log('running removeTask');
    this.setState({ canDelete: false });
    this.props.deleteTask(_id).then(() => this.getList());
    //this.getList();

    //this.getList();
  };

  completeTask = (_id, done) => {
    console.log('finish');
    console.log('the done value is: ' + done);
    console.log(!done);
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
    return (
      <div>
        <Navbar></Navbar>
        <div className="container">
          <div class="row justify-content-initial">
            <div class="col-7">
              {this.state.isLoading ? (
                <Loading></Loading>
              ) : (
                <TaskList></TaskList>
              )}
            </div>
            <div className="col-5 padded">
              <TaskForm></TaskForm>
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
    sharedState: state.sharedState,
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
    getTasks: (curTasks) => {
      console.log('getTasks');
      console.log(curTasks);
      dispatch({ type: 'GET_TASKS', payload: curTasks });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
