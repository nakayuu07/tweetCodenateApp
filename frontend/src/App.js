import React, { Component } from 'react';
import './stylesheets/App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Top from './MainRouterComponents/Top/Top'
import MainBody from './MainRouterComponents/MainBody'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={MainBody} />
          <Route path="/top" component={Top} />
        </div>
      </Router>
    );
  }
}

export default App;
