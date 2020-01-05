/** buttons.js **
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

  & button {
    width: 9vmin;
    height: 9vmin;
    font-size: 7.5vmin;
  }

  & button:disabled {
    opacity: 0.25;
  }
`

export default class Buttons extends Component {
  render() {
    return (
      <StyledButtonDiv
        id="buttons"
      >
        <button
          disabled={this.props.first}
          onClick={() => this.props.onClick("back")}
        >
          ⮜
        </button>
        <button
          disabled={this.props.last}
          onClick={() => this.props.onClick("next")}
        >
          ⮞
        </button>
      </StyledButtonDiv>
    )
  }
}