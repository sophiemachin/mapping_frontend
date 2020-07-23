import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import StateSetup from './StateSetup'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import background from './images/background.jpg'

ReactDOM.render(
  <React.StrictMode>
    <div style={{
      backgroundColor: '#ebe7e4',
      height: '93vh',
      paddingTop: '5vh'
    }}>

      <AppBar>
        <Toolbar>
          <h1>Mapping sandbox frontend</h1>
        </Toolbar>
      </AppBar>

      <StateSetup />

    </div>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
