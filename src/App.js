import React from 'react';
import './App.css';
import { Typography as T } from '@material-ui/core'
import { Button, Card, CardActions, CardContent, CardMedia, Grid, makeStyles
} from '@material-ui/core'

import quiz from './images/quiz.jpg'
import world from './images/world.jpg'


const useStyles = makeStyles(theme => ({
  main: {
    maxWidth: '95vw',
    height: '100vh',
    padding: '40px',
  },
  media: {
    paddingTop: '40%',
  },
  introText : {
    padding: '10px'
  }
}))

function App() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <T className={classes.introText}>Mapping sandbox homepage</T>

      <Grid container spacing={6} >
        <Grid item xs={12} sm={6}>
          <Card variant="outlined">
            <CardContent>
              <CardMedia
                className={classes.media}
                style={{height:'100px'}}
                image={quiz}
                title="Quiz flat lay"
              />

            </CardContent>
            <CardActions>
              <Button href="#/quiz">Go to quiz</Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Card variant="outlined">
            <CardContent>
              <CardMedia
                className={classes.media}
                style={{height:'100px'}}
                image={world}
                title="World map"
              />

            </CardContent>
            <CardActions>
              <Button href="#/map">Go to map</Button>
            </CardActions>
          </Card>
        </Grid>

      </Grid>

    </div>
  );
}

export default App;
