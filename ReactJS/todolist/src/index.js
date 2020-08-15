import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './components/pages/App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './components/reducers/rootReducer';
import Home from './components/pages/Home';
import 'bootstrap/dist/css/bootstrap.css';
import thunk from 'redux-thunk';

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
      <Home />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
