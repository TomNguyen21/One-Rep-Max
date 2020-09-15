import React from 'react';
import styled from 'styled-components';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      max: 0,
      formula: (weight, reps) =>{ return weight * (36 / (37 - reps)) },
      isLbs: true,
      click1: true,
      click2: false,
      click3: false,
    };
    this.calculateMax = this.calculateMax.bind(this);
    this.resetMax = this.resetMax.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setMetric = this.setMetric.bind(this);
    this.setBryzchi = this.setBryzchi.bind(this);
    this.setEpley = this.setEpley.bind(this);
    this.setLombardi = this.setLombardi.bind(this);
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
  setMetric() {
    this.setState({ isLbs: !this.state.isLbs })
  }
  setBryzchi() {
    this.setState({
      formula: (weight, reps) => { return weight * (36/ (37 - reps)) },
      click1: true,
      click2: false,
      click3: false,
    });
  }

  setEpley() {
    this.setState({
      formula: (weight, reps) => { return weight * (1 + (reps/30) )},
      click1: false,
      click2: true,
      click3: false,
    });
  }

  setLombardi() {
    this.setState({ formula: (weight, reps) => { return weight * reps**0.10 },
    click1: false,
    click2: false,
    click3: true,
  });
  }

  render() {
    let max = this.state.max;
    let isLbs = this.state.isLbs;
    return (
      <FormStyle onSubmit={this.handleSubmit}>
      <div>
        <FormulaHead>
          Formula
          <ButtonRow>
            <FormulaButtons onClick={this.setBryzchi} style={this.state.click1 ? {backgroundColor: "#22438C", color: "#FFFFFF"} : {backgroundColor: ''}}>Bryzchi</FormulaButtons>
            <FormulaButtons onClick={this.setEpley} style={this.state.click2 ? {backgroundColor: "#22438C", color: "#FFFFFF"} : {backgroundColor: ''}}>Epley</FormulaButtons>
            <FormulaButtons onClick={this.setLombardi} style={this.state.click3 ? {backgroundColor: "#22438C", color: "#FFFFFF"} : {backgroundColor: ''}}>Lombardi</FormulaButtons>
          </ButtonRow>
        </FormulaHead>

      </div>
        <div>
          <h4>Weight <small>{isLbs ? 'lbs' : 'kgs'}</small></h4>
          <input id="weight" min="0" type="number" defaultValue="0"/>
          <h4>Number of Reps</h4>
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
      </FormStyle>
    )
  }
}
const FormStyle = styled.form`
  position: absolute;
  left: 28px;
  top: 383px;
`;
const CalculatedPercents = styled.div`
  display: flex;
  flex-direction: row;
  clear: both;
`;
const FormulaHead = styled.h3`
  font-family: Karla;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
`;
const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 321px;
  height: 41px;
  background: #FFFFFF;
  box-shadow: 0px 4px 10px rgba(106, 106, 106, 0.16);
    :hover {
      background-color: gray
    }
`;
const FormulaButtons = styled.button`
  width: 321px;
  height: 41px;
  font-family: Karla;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
`
const ButtonClicked = styled(FormulaButtons)`
  background-color: #22438C;
  color: #FFFFFF;
`
export default Form;
