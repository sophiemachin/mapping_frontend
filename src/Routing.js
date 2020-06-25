import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import App from './App'
import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import {Card, CardActionArea, CardHeader, Grid} from '@material-ui/core';
import { QuizQuestion } from './QuizQuestion'


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
        <CardActionArea>
          <CardHeader title={page} />
            <Grid container justify="center" alignItems="center">

            </Grid>

        </CardActionArea>
      </Card>
    </div>
  </div>
}

const Notfound  = () => <SkeletonPage page='Not found'/>;
const Quiz  = () => <SkeletonPage page='Quiz'/>;
const Results  = () => <SkeletonPage page='Results'/>;
const Explore  = () => <SkeletonPage page='Explore'/>;


export const Routing = () => <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/quiz" exact component={Quiz} />
        <Route path="/quiz/:id" exact component={QuizQuestion} />
        <Route path="/results" exact component={Results} />
        <Route path="/explore" exact component={Explore} />
        <Route component={Notfound} />
      </Switch>
</Router>
