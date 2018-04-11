import React, { Component } from 'react';
import './App.css';

import Cards from './containers/Cards';
import Drawer from './containers/Drawer';

class App extends Component {
  render() {
    return (
      <div>
        <Cards />
        <Drawer />
      </div>
    );
  }
}

export default App;
