/** infoButtons.js **
 *
 *   
**/

import React, { Component } from 'react';
import styled from 'styled-components'


const StyledButtonDiv = styled.div`
  position: absolute
  z-index: 1;
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
`

const StyledImage = styled.img`
    height: 100%;
    opacity: 0.1;
  

  &:hover {
    opacity: 0.33;
  }

  &:active {
    opacity: 0.5;
  }

  ${props => props.hide
           ? "opacity: 0;pointer-events: none;"
           : ""
   }
`

export default class InfoButtons extends Component {
  render() {
    return (
      <StyledButtonDiv
        onClick={this.props.onClick}
        onMouseUp = {this.mouseUp}
      >
        <StyledImage
          src="img/icons/info.svg"
          id="Info"
          hide={this.props.hide === "info"}
        /> 
        <StyledImage
          src="img/icons/credits.svg"
          id="Credits"
          hide={this.props.hide === "credits"}
        /> 
      </StyledButtonDiv>
    )
  }
}