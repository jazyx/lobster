/** menu.js **
 *
 *
**/

import React, { Component } from 'react';
import styled from 'styled-components'


const StyledMenu = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 20vh;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,0.8);

  ${props => props.show
           ? "display: flex;"
           : "display: none;"
   }

  @media (max-aspect-ratio: 1/1) {
    display: none;
  }
`

const StyledCheckBox = styled.button`
  width: 50vw;
  height: 10vh;
  font-size: 5vh;
  background-color: #111;
  border-color: #555;
  color: #fff;
`

const StyledCloseBox = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 3vh;
  height: 3vh;
  display: flex;
  font-size: 5vh;
  background-color: #000;
  border-color: #333;

  & p {
    line-height: 0;
    position: relative;
    left: -1vh;
    font-size: 5vh;
    color: #c00;
  }
`


export default class Menu extends Component {
  getCheckBox() {
    const text = this.props.showImage
               ? "Hide image"
               : "Show image"
    return (
      <StyledCheckBox
        onClick={this.props.toggleImage}
      >
        {text}
      </StyledCheckBox>
    )
  }


  getCloseBox() {
    return (
      <StyledCloseBox
        onClick={this.props.close}
      >
        <p>×</p>
      </StyledCloseBox>
    )
  }
//

  render() {
    const checkBox = this.getCheckBox()
    const closeBox = this.getCloseBox()

    return (
      <StyledMenu
        show={this.props.show}
      >
        {checkBox}
        {closeBox}
      </StyledMenu>
    )
  }
}