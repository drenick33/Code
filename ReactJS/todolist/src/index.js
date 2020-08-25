import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
//import './index.css';
//import App from './components/pages/App';
import * as serviceWorker from './serviceWorker';

//CSS Decorations through bootstrap
import 'bootstrap/dist/css/bootstrap.css';

//Redux
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './components/reducers/rootReducer';

//Pages&Components to Route to
import Home from './components/pages/Home';
import Board from './components/pages/Board';
import TaskForm from './components/forms/TaskForm';
import BoardForm from './components/forms/BoardForm';
import bootground from './components/bootground';
import TaskFormBOARD from './components/forms/TaskFormBOARD';

// Put any other imports below so that CSS from your
// components takes precedence over default styles.

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Route exact path="/" component={Home}></Route>
        <Route path="/board/:board_id" component={Board}></Route>
        <Route path="/taskForm/:board_id" component={TaskFormBOARD}></Route>
        <Route exact path="/taskform" component={TaskForm}></Route>
        <Route path="/boardform" component={BoardForm}></Route>
        <Route path="/bootground" component={bootground}></Route>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
