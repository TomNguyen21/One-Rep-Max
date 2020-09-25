import React from 'react';
import styled from 'styled-components';

class Modal extends React.Component {
  render() {
    if(!this.props.show) {
      return null;
    }else {
      return (
        <ModalContainer>
          <LessDetailButton onClick={this.props.showModal}>Less Details</LessDetailButton>
          <OneRepMax>100% 1 RM: {this.props.max}</OneRepMax>
          {this.props.children}
        </ModalContainer>
      )
    }
  }

}
const LessDetailButton = styled.button`
  font-family: Karla;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #407bff;
  border: 2px solid ;
  border-color: #407bff;
  border-radius: 50px;
  outline: none;
  :hover {
    background-color: #F2F2F2;
  }
  :active {
    transform: scale(.9);
    box-shadow: 1px 2px 5px rgba(106, 106, 106, 0.16);
  }
`
const OneRepMax = styled.div`
  margin-top: 10px;
  font-size: 26px;
  font-weight: bold;
`
const ModalContainer = styled.div`
  font-family: Karla;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  position: absolute;
  left: 0px;
  top: 195px;
  z-index: 1;
  width: 400px;
  height: 100%:
  overflow: auto;
  background-color: #f2f2f2;
  border: 1px solid rgba(0, 0, 0, 0.16)
  border-radius: 50px;
`
export default Modal;


// width: 500px;
//   background: white;
//   border: 1px solid #ccc;
//   transition: 1.1s ease-out;
//   box-shadow:
//     -2rem 2rem 2rem rgba(black, 0.2);
//   filter: blur(0);
//   transform: scale(1);
//   opacity: 1;
//   visibility: visible;
//   &.off {
//     opacity: 0;
//     visibility: hidden;
//     filter: blur(8px);
//     transform: scale(0.33);
//     box-shadow: 1rem 0 0 rgba(black, 0.2);
//   }