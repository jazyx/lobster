/** item.js **
 *
 *
**/

import React, { Component } from 'react';
import styled from 'styled-components'


const StyledItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: ${props => props.height}px;
`

const StyledText = styled.p`
  font-size: ${props => props.fontSize};
`


const StyledDates = styled.p`
  width: 100%;
  margin: 0;
  text-align: center;
  font-size: 3vmin;
`



export default class Item extends Component {
  constructor(props) {
    super(props)

    this.canvas = document.createElement('canvas')
    this.adjustSizes = this.adjustSizes.bind(this)

    window.addEventListener("resize", this.adjustSizes, false)
  }


  getMaxSizes() {
    const rect = document.body.getBoundingClientRect()
    const maxWidth = rect.width   * 0.96
    const fullHeight = this.getFullHeight(rect)
    const maxHeight = fullHeight * 0.8699

    return { maxWidth, maxHeight, fullHeight }
  }


  getFullHeight(rect) {
    if (rect.width > rect.height && !this.props.showImage) {
      // Hide the info component, show only this item component
      return rect.height

    } else if (rect.height * 0.7 > rect.width){
      return rect.height - rect.width * 1.1
    } else {
      return rect.height - (Math.min(rect.width, rect.height * 0.8))
    }
  }


  adjustSizes() {
    this.sizes = this.getMaxSizes()
  }


  getOptimumFontSize(text, dates) {
    const context = this.canvas.getContext('2d')
    const maxHeight = ( dates )
                      ? this.sizes.fullHeight * 0.7
                      : this.sizes.maxHeight

    let width
      , step
    let height = step = maxHeight
    let steps = 16

    do {
      context.font = `${height}px sans-serif`
      width = context.measureText(text).width

      steps -= 1
      step /= 2

      if (width > this.sizes.maxWidth) {
        height -= step
      } else if (height === maxHeight) {
        step = 0
      } else {
        height += step
      }

    } while (steps && (step > 0.01 || width > this.sizes.maxWidth))

    return height + "px"
  }


  render() {
    this.adjustSizes()
    const text = this.props.item.text
    const dates = this.props.item.dates
    const fontSize = this.getOptimumFontSize(text, dates)
    const height = this.sizes.fullHeight

    return (
      <StyledItem
        height={height}
      >
        <StyledText
          style={{fontSize: fontSize}}
        >
          {text}
        </StyledText>
        <StyledDates>
          {dates}
        </StyledDates>
      </StyledItem>
    )
  }
}