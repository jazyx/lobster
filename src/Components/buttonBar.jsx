/** buttonBar.js **
 *
 *
**/

import React, { Component } from 'react';
import styled from 'styled-components'


const StyledButtonDiv = styled.div`
  position: fixed;
  bottom: 0;
  width: 100vw;
  display: flex;
  justify-content: space-between;
`

const StyledButton = styled.button`
  width: 9vmin;
  height: 9vmin;
  border: none;
  background-color: transparent;
  background-image: url("img/icons/${props => props.src}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
  opacity: 0.333;

  &:hover {
    opacity: 0.666;
  }

  &:active {
    opacity: 1;
  }

  ${props => props.active
           ? "opacity:1!important;"
           : ""
   }

  ${props => props.disabled
           ? "opacity:0.1;pointer-events:none;cursor:default;"
           : ""
   }

  ${props => props.hide
           ? "visibility:hidden;pointer-events;cursor:default;"
           : ""
   }

`

export default class Buttons extends Component {
  render() {
    const noInfo = this.props.empty.indexOf("info") > -1
    const noWords = this.props.empty.indexOf("words") > -1

    return (
      <StyledButtonDiv
        onClick={this.props.showMenu}
      >
        <StyledButton
          src="prev.svg"
          onClick={() => this.props.go("back")}
          disabled={this.props.first}
        />
        <StyledButton
          src="info.svg"
          onClick={() => this.props.show("info")}
          active={this.props.info === "info"}
          hide={this.props.hide || noInfo}
        />
        <StyledButton
          src="words.svg"
          onClick={() => this.props.show("words")}
          active={this.props.info === "words"}
          hide={this.props.hide || noWords}
        />
        <StyledButton
          src="credits.svg"
          onClick={() => this.props.show("credits")}
          active={this.props.info === "credits"}
          hide={this.props.hide}
        />
        <StyledButton
          src="next.svg"
          onClick={() => this.props.go("next")}
          disabled={this.props.last}
        />
      </StyledButtonDiv>
    )
  }
}