/** image.js **
 *
 *   
**/

import React, { Component } from 'react';
import styled from 'styled-components'

const StyledImage = styled.img`
  width: 100%;
  opacity: ${props => props.dim
                    ? 0.333
                    : 1
            }

`

export default class Image extends Component {
  constructor(props) {
    super(props)
    this.folder = "img/"
  }


  render() {
    const image = this.props.image

    if (!image || image.src === "XXX") {
      return ""
    }

    return (
      <StyledImage
        src={this.folder + image.src}
        alt={this.props.text}
        dim={this.props.dim}
      />
    )
  }
}