import React from 'react'
import { Typography as T } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { regions, weightings, phrases } from './Questions'

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2),
  },

}))

const Results = (props) => {
  const classes = useStyles();

   let initState = {
    NE: 0,
    NW: 0,
    YH: 0,
    EM: 0,
    WM: 0,
    E:  0,
    L:  0,
    SE: 0,
    SW: 0,
    NI: 0,
    S:  0,
    W:  0,
  }

  for (let qId in props.values) {
    let word = props.values[qId]
    for (let region in weightings[word]){
      let weighting = weightings[word][region]
      initState[region] += weighting
    }
  }

  var items = Object.keys(initState).map(function(key) {
  return [key, initState[key]];
  });

  items.sort(function(first, second) {
  return second[1] - first[1];
  });


  return <div className={classes.root}>
      <T variant='h4' align='center'>Results</T>
      <T variant='body1'  align='center'>Best guess at where you live</T>
      <p>{regions[items[0][0]]}</p>
      <p>{phrases[items[0][0]]}</p>

      </div>
}

export default Results
