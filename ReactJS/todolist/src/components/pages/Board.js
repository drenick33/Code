import React, { useEffect } from 'react';
import NavBar from '../navbar/Navbar';
import axios from 'axios';

import { connect } from 'react-redux';
import { getCurBoard } from '../../actions/boardActions';

const Board = (props) => {
  useEffect(() => {
    //useEffect similar to componentDidMount
    console.log('useEffect props are: ', props.match.params);
    props.getThisBoard(props.match.params.board_id);
    return () => {};
  }, [props.match.params.board_id]); //watcher, changes
  return (
    <div>
      <NavBar></NavBar>
      <h4 className="pt-5">{props.match.params.board_id}</h4>
      <h4>{props.curBoard.title}</h4>
    </div>
  );
};

// class Board extends Component {

//   componentDidMount() {
//     getCurBoard(this.props.match.params.board_id);
//     this.getCur();
//   }

//   getCur = () => {
//     console.log('getting current board from BoardNEW');
//     let curTask = {};
//     axios({
//       method: 'GET',
//       url: 'http://localhost:6001/boards/' + this.props.match.params.board_id,
//     })
//       .then(async (res) => {
//         curTask = res.data;
//         console.log('The result of getCur is: ', curTask);
//         console.log('The res.data was: ', res.data);
//         this.props.getThisBoard(curTask);
//       })
//       .catch((err) => {
//         console.log('ran error');
//         console.log(err);
//       });
//   };

//   render() {
//     // const id = this.props.match.params.board_id;
//     const board = this.props.curBoard;
//     let Tasknum = 0;
//     if (board.todos) {
//       Tasknum = board.todos.length;
//     }
//     console.log('board.todos is: ', board.todos);
//     return (
//       <div>
//         <NavBar></NavBar>
//         <div className="container bg-light">
//           <h4 className="mb-4">id</h4>
//           <h4>{board.title}</h4>
//           {Tasknum > 0 ? (
//             <div>
//               <h4>TRUE</h4>
//             </div>
//           ) : (
//             <h4>No Tasks in this board</h4>
//           )}
//         </div>
//       </div>
//     );
//   }
// }

const mapStateToProps = (state) => {
  //add ToDos from redux to props
  return {
    curBoard: state.curBoard,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getThisBoard: (curBoard) => {
      console.log('in dispatch to GET_CUR_BOARDS');
      console.log(curBoard);
      dispatch(getCurBoard(curBoard));
      //dispatch({ type: 'GET_CUR_BOARD', payload: curBoard });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
