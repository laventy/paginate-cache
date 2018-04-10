import React, { Component } from 'react';
import './App.css';

import Cards from './components/Cards';
import Pagination from './components/Pagination';
import TemporaryDrawer from './components/TemporaryDrawer';

class App extends Component {
  render() {
    return (
      <div>
        <Cards />
        <TemporaryDrawer />
      </div>
    );
  }
}

export default App;
