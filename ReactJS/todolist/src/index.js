import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
//import './index.css';
//import App from './components/pages/App';
import * as serviceWorker from './serviceWorker';

//CSS Decorations through bootstrap
import 'bootstrap/dist/css/bootstrap.css';

//Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './components/reducers/rootReducer';

//Pages&Components to Route to
import Home from './components/pages/Home';
import Board from './components/pages/Board';
import TaskForm from './components/TaskForm';
import BoardForm from './components/BoardForm';

// Put any other imports below so that CSS from your
// components takes precedence over default styles.
const store = createStore(
  rootReducer,
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Route exact path="/" component={Home}></Route>
        <Route path="/:board_id" component={Board}></Route>
        <Route path="/taskform" component={TaskForm}></Route>
        <Route path="/boardform" component={BoardForm}></Route>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
