import React from 'react';
import styled from 'styled-components';
class Modal extends React.Component {
  render() {
    if(!this.props.show) {
      return null;
    }else {
      return (
        <ModalContainer>
          {this.props.children}
        </ModalContainer>
      )
    }
  }

}

const ModalContainer = styled.div`
font-family: Karla;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 30px;
background-color: #f2f2f2;
border-radius: 10px;
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