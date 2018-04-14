import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import './App.css';

import Cards from './containers/Cards';
import Drawer from './containers/Drawer';
import Pagination from './containers/Pagination';

class App extends Component {
  render() {
    return (
      <div>
        <div className="outer-container">
          <Grid container justify="center" spacing={16}>
            <Cards />
            <Grid item xs={12}>
              <Pagination />
            </Grid>
          </Grid>
        </div>
        <Drawer />
      </div>
    );
  }
}

export default App;
