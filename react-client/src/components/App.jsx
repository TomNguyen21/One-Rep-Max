import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Form from './Form.jsx';
import styled from 'styled-components';
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
    axios.get('/')
      .then()
      .catch()
  }
  componentDidMount() {
    this.getUserInfo();
  }

  render () {
    return (
      <div>
        <HeaderCalc>Calculate</HeaderCalc>
        <HeaderOneRep>one rep max</HeaderOneRep>
        <HeaderImg src="https://hackreactor5erfliesmoreplaces.s3-us-west-1.amazonaws.com/Workout-rafiki+1.png"/>
        <Form />
      </div>
    )
  }
}

const HeaderCalc = styled.h3`
position: absolute;
width: 120px;
height: 22px;
left: 28px;
top: 58px;

font-family: Karla;
font-style: normal;
font-weight: normal;
font-size: 22px;
line-height: 26px;
`;
const HeaderOneRep = styled.h3`
position: absolute;
width: 191px;
height: 37px;
left: 28px;
top: 83px;

font-family: Karla;
font-style: normal;
font-weight: bold;
font-size: 26px;
line-height: 30px;
`;
const HeaderImg = styled.img`
  position: absolute;
  height: 260px;
  top: 150px;
  z-index: -1;
`


export default App;
