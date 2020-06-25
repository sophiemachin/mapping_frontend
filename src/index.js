import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Routing } from './Routing'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

ReactDOM.render(
  <React.StrictMode>
    <AppBar>
        <Toolbar>
          <h1>Sophie's mapping stuff</h1>
        </Toolbar>
    </AppBar>
    <div style={{marginTop: '100px'}}>
      <Routing />
    </div>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
