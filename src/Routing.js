import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import App from './App'
import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import {Card, CardHeader, Grid} from '@material-ui/core';
import { QuizQuestion } from './QuizQuestion'
import { QuizStart } from './QuizStart'
import Results from './Results'


const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2),
  },
  content : {
    display:'flex',
    height: '50vh',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    margin: theme.spacing(1),
    // textAlign: 'center',
  },
  avatar:{
    margin : theme.spacing(0.5),
  },
}))


function SkeletonPage({page}) {
  const classes = useStyles();
  return <div className={classes.root}>
    <div className={classes.content}>
      <Card className={classes.card}>
          <CardHeader title={page} />
            <Grid container justify="center" alignItems="center">
            </Grid>
      </Card>
    </div>
  </div>
}

const Notfound  = () => <SkeletonPage page='Not found'/>;
const Explore  = () => <SkeletonPage page='Explore'/>;


export const Routing = (props) => <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/quiz" exact component={QuizStart} />
        <Route path="/quiz/:id" exact render={(params) =>
            <QuizQuestion {...props} {...params} />} />
        <Route path="/results" exact render={(params) =>
            <Results {...props} {...params} />} />
        <Route path="/explore" exact component={Explore} />
        <Route component={Notfound} />
      </Switch>
</Router>
