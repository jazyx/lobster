/** info.js **
 *
 *   
**/

import React, { Component } from 'react';
import styled, { css } from 'styled-components'


const StyledInfoDiv = styled.div`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background-color: #999;

  @media (min-aspect-ratio: 1/1) {
    height: 0
    display: none;
  }
`

export default class Info extends Component {
  constructor(props) {
    super(props)

    this.adjustSize = this.adjustSize.bind(this)
    window.addEventListener("resize", this.adjustSize, false)

    const size = this.getSize()
    this.state = { size }
  }


  componentDidMount() {
    this.adjustSize()
  }


  adjustSize() {
    const size = this.getSize()
    this.setState({ size })
  }


  getSize() {
    const rect = document.body.getBoundingClientRect()
    const size = Math.min(rect.width, rect.height * 0.8)
    return size
  }


  render() {
    return (
      <StyledInfoDiv
        size={this.state.size}
      />
    )
  }
}