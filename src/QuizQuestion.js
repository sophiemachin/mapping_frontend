import React from 'react'
import { Button, Card, CardContent, CardHeader, Divider, FormControlLabel as FCL,
  Radio, RadioGroup, Typography as T } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Pagination from '@material-ui/lab/Pagination';
import questions from './Questions'

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
  },
  card: {
    margin: theme.spacing(1),
  },
  title: {
    margin : theme.spacing(2),
  },
  cardContent : {
  },
  options : {
    marginLeft: theme.spacing(4),
    marginBottom: theme.spacing(2)
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing(2),
  }
}))

export const QuizQuestion  = (props) => {
  const classes = useStyles();
  const { id } = props.match.params
  const { history } = props

  const [answered, setAnswered] = React.useState(false);

  const handleChange = (event) => {
    setAnswered(true)
    props.updateGuess(id, event.target.value)
  };

  const handleForwardNav = () => {
    const next = parseInt(id) + 1
    if (next === 3) {
      history.push(`/results`)
    } else {
      history.push(`/quiz/${parseInt(id) + 1}`)
    }
  };

  const handleBackNav = () => {
    const next = parseInt(id) - 1
    if (next === 0) {
      history.push(`/quiz`)
    } else {
      history.push(`/quiz/${parseInt(id) - 1}`)
    }
  };

  const value = props.values[id] ? props.values[id] : false

  return <div className={classes.root}>
    <div className={classes.content}>
      <Card className={classes.card} variant="outlined">
        <CardHeader subheader={'Question ' + id} />
        <CardContent className={classes.cardContent} >
          <T variant='h4' className={classes.title}>{questions[id].question}</T>
          <div className={classes.options}>
            <RadioGroup name="gender1" value={value} onChange={handleChange}>
              {questions[id].options.map(option =>
              <FCL value={option} control={<Radio />} label={option} key={option}/>
              )}
            </RadioGroup>
          </div>

          <Divider />

          <div className={classes.nav}>
            <Button variant="outlined" onClick={handleBackNav}>
              Back
            </Button>

            <Button
              variant="outlined"
              onClick={handleForwardNav}
              disabled={!answered}
            >
              {id === '5' ? 'Submit' : 'Next' }
            </Button>
          </div>
        </CardContent>

      </Card>
    </div>
    <Pagination count={5} page={parseInt(id)}/>
  </div>
}

