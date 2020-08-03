import { createMuiTheme } from '@material-ui/core/styles'

export const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: { main: 'rgb(163,0,0)' },
    secondary: { main: 'rgb(0,175,181)' },
    text : {
      primary : 'rgb(230,230,230)',
    }
  },
  typography: {
    body1: {
      color: 'rgb(220,220,220)',
    }
  }
})
