import React from 'react'
import { Typography as T } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2),
  },

}))

const Results = () => {
    const classes = useStyles();
    return <div className={classes.root}>
      <T variant='h4' align='center'>Results</T>
      <T variant='body1'  align='center'>Best guess at where you live</T>

      <iframe
        title="map"
        id="theFrame"
        src="http://127.0.0.1:5000"
        frameBorder="0"
        style={{
          width: '100%',
          height : '800px',
        }}
      >
      </iframe>
      </div>
}

export default Results
