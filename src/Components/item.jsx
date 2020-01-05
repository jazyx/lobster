/** item.js **
 *
 *   
**/

import React, { Component } from 'react';
import styled, { css } from 'styled-components'


const StyledText = styled.p`
  font-size: ${props => props.fontSize};
`



export default class Item extends Component {
  constructor(props) {
    super(props)

    this.adjustFontSize = this.adjustFontSize.bind(this)

    this.canvas = document.createElement('canvas')
    this.state = this.getMaxSizes()

    window.addEventListener("resize", this.adjustFontSize, false)
  }


  componentDidMount() {
    this.adjustFontSize()
  }


  getMaxSizes() {
    const rect = document.body.getBoundingClientRect()
    const maxWidth = rect.width   * 0.96
    const maxHeight = rect.height * 0.8699 // fudge factor for Verdana

    return { maxWidth, maxHeight }
  }


  adjustFontSize() {
    const maxSizes = this.getMaxSizes()
    this.setState( maxSizes )
  }


  getOptimumFontSize(text) {
    const context = this.canvas.getContext('2d')

    let width
      , step
    let height = step = this.state.maxHeight
    let steps = 16

    do {     
      context.font = `${height}px sans-serif`
      width = context.measureText(text).width

      steps -= 1    
      step /= 2

      if (width > this.state.maxWidth) {
        height -= step
      } else if (height === this.state.maxHeight) {
        step = 0
      } else {
        height += step
      }

    } while (steps && (step > 0.01 || width > this.state.maxWidth))

    console.log(height)

    return height + "px"
  }


  render() {
    const text = this.props.item.text
    const fontSize = this.getOptimumFontSize(text)

    return (
      <div
        id="item"
      >
        <StyledText
          style={{fontSize: fontSize}}
        >
          {text}
        </StyledText>
      </div>
    )
  }
}