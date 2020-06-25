import React from 'react'
import { Routing } from './Routing'

class StateSetup extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      questions : {}
    };
  }

  updateGuess = (qId, selected) => {
    const newState = {...this.state.questions}
    newState[qId] = selected
    this.setState({questions: newState})
  }

  render () {
    return (
      <div>
        <Routing
          values={this.state.questions}
          updateGuess={this.updateGuess.bind(this)}
        />
      </div>
    );
  }
}

export default StateSetup;
