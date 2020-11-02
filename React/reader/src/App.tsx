import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.less';
import Navbar from './components/layout/Navbar';
import Story from './components/pages/story/Story';
import Browser from './components/pages/browser/Browser';
import SavedWords from './components/pages/savedWords/SavedWords';
import InputForm from './components/pages/userText/InputForm';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Navbar></Navbar>
        </header>
        <Switch>
          <Route exact path="/" component={Browser} />
          <Route path="/story/:id" component={Story} />
          <Route exact path="/savedwords" component={SavedWords} />
          <Route exact path="/custom" component={InputForm} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
