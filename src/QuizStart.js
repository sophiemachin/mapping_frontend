import React from 'react'
import { Button, Card, CardContent, CardHeader, Divider, Typography as T } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2),
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  content : {
    display:'flex',
    minHeight: '50vh',
    justifyContent: 'center',
    alignItems: 'center',
    margin : theme.spacing(2),

  },
  card: {
    margin: theme.spacing(1),
  },
  title: {
    margin : theme.spacing(2),
  },
  cardContent : {
    // padding: theme.spacing(2),
  },
  options : {
    marginLeft: theme.spacing(4),
    marginBottom: theme.spacing(2)
  },
  nav: {
    display: 'flex',
    flexDirection: 'row-reverse',
    marginTop: theme.spacing(2),
  },
}))

export const QuizStart  = (props) => {
  const classes = useStyles();
  const { history } = props

  const handleForwardNav = () => {
    history.push(`/quiz/1`)
  };

    return <div className={classes.root}>
    <div className={classes.content}>
      <Card className={classes.card} variant="outlined">
        <CardHeader subheader={'Quiz intro'} />
        <CardContent className={classes.cardContent} >
          <T variant='h4' className={classes.title}>This quiz is going to probe your mind</T>
          <div className={classes.options}>
            <T variant='subtitle 2' className={classes.title}>Joke, it's just for fun</T>
          </div>

          <Divider />

          <div className={classes.nav}>
            <Button variant="outlined" onClick={handleForwardNav} >
              Let's go!
            </Button>
          </div>
        </CardContent>

      </Card>
    </div>
  </div>
}

