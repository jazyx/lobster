/** image.js **
 *
 *   
**/

import React, { Component } from 'react';
import styled, { css } from 'styled-components'

const StyledImageDiv = styled.div`
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  & img {
    width: 100%;
  }
`

export default class Image extends Component {
  constructor(props) {
    super(props)
    this.folder = "img/"
  }


  render() {
    console.log(this.props)
    const image = this.props.image
    if (!image || image.src === "XXX") {
      return ""
    }

    return (
      <StyledImageDiv>
        <img
          src={this.folder + image.src}
          alt={this.props.text}
        />
      </StyledImageDiv>
    )
  }
}