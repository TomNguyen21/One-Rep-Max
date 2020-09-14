import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Form from './Form.jsx';
/**
 * Have toggle to switch between lbs and kg
 * have a way to save data and persist it (does that mean making a user account and having to use authentication?)
 * Have a toggle to switch between different formulas
 *   Brzycki: weight × (36 / (37 - reps)) (another way to write it)
 *   Epley: weight × (1 + reps/30)
 *   Lombardi: weight × reps ^ 0.1
 * use modal to show a breakdown of % and 1rm
 * have different categories for different lifts when persisting data
 * find api that will link to different workout plans to increase max
 *
 */
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      logs: []
    }
    this.getUserInfo = this.getUserInfo.bind(this);
  }

  getUserInfo() {
    // axios.get('/')
    //   .then()
    //   .catch()
  }
  componentDidMount() {
    this.getUserInfo();
  }

  render () {
    return (
      <div>
        <Form />
      </div>
    )
  }
}

export default App;
