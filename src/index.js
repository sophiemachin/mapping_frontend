import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import StateSetup from './StateSetup'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Link from '@material-ui/core/Link'
import { theme } from './styles.js'
import { MuiThemeProvider } from '@material-ui/core/styles'

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <div style={{
        backgroundColor: 'rgb(44,44,44)',
        height: '93vh',
        paddingTop: '5vh'
      }}>

        <AppBar>
          <Toolbar>
              <Link href={'/'} import color="textPrimary" variant='h4'
                    style={{textDecoration:'none'}}>
                Mapping sandbox frontend
              </Link>

          </Toolbar>
        </AppBar>

        <StateSetup />

      </div>
  </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
