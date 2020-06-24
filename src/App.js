import React from 'react';
import './App.css';
import Map from './Map'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

function App() {
  return (
    <div style={{marginTop: '100px'}}>
      <AppBar>
        <Toolbar>
          <h1>Sophie's mapping stuff</h1>
        </Toolbar>
      </AppBar>

      <Map />
    </div>
  );
}

export default App;
