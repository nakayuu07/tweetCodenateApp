import React, { Component } from 'react';
import './stylesheets/App.css';

import MainBody from './MainRouterComponents/MainBody'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainBody/>
      </div>
    );
  }
}

export default App;
