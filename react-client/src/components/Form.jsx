import React from 'react';
import styled from 'styled-components';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      max: 0,
      formula: (weight, reps) =>{ return weight * (36 / (37 - reps)) }
    };
    this.calculateMax = this.calculateMax.bind(this);
    this.resetMax = this.resetMax.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  calculateMax(weight, reps) {
    this.setState({ max: Math.round(this.state.formula(weight, reps)) })

  }
  resetMax() {
    this.setState({ max: 0 });
  }
  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    let max = this.state.max;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Weight</label>
          <input id="weight" min="0" type="number" defaultValue="0"/>
          <label>Reps</label>
          <select id="reps" id="reps">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            </select>
          </div>
          <div>
            <button onClick={() => this.calculateMax(document.getElementById('weight').value, document.getElementById('reps').value)}>Calculate</button>
            <input onClick={this.resetMax} type="reset" />
          </div>
          <div className="calculatedMax">
            <div>One Rep Max: {max} </div>
            <CalculatedPercents>
              <div className="col1">
                <ul>
                  <li>95% 1 RM: {Math.round(max * .95)}</li>
                  <li>85% 1 RM: {Math.round(max * .85)}</li>
                  <li>75% 1 RM: {Math.round(max * .75)}</li>
                  <li>65% 1 RM: {Math.round(max * .65)}</li>
                  <li>55% 1 RM: {Math.round(max * .55)}</li>
                </ul>
              </div>
              <div className="col2">
                <ul>
                  <li>90% 1 RM: {Math.round(max * .90)}</li>
                  <li>80% 1 RM: {Math.round(max * .80)}</li>
                  <li>70% 1 RM: {Math.round(max * .70)}</li>
                  <li>60% 1 RM: {Math.round(max * .60)}</li>
                  <li>50% 1 RM: {Math.round(max * .50)}</li>
                </ul>
              </div>
            </CalculatedPercents>
          </div>
      </form>
    )
  }
}
const CalculatedPercents = styled.div`
  display: flex;
  flex-direction: row;
  clear: both;
`;
export default Form;
