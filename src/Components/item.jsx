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
    // const maxHeight = rect.height * 0.8699 // fudge factor for Verdana
    const fullHeight = ( rect.width > rect.height )
                       ? rect.height
                       : rect.height - (
                           Math.min(rect.width, rect.height * 0.8)
                         )
    const maxHeight = fullHeight * 0.8699 // fudge factor for Verdana

    return { maxWidth, maxHeight, fullHeight }
  }


  adjustFontSize() {
    const maxSizes = this.getMaxSizes()
    this.setState( maxSizes )
  }


  getOptimumFontSize(text, dates) {
    const context = this.canvas.getContext('2d')
    const maxHeight = ( dates )
                      ? this.state.fullHeight * 0.7
                      : this.state.maxHeight

    let width
      , step
    let height = step = maxHeight 
    let steps = 16

    do {     
      context.font = `${height}px sans-serif`
      width = context.measureText(text).width

      steps -= 1    
      step /= 2

      if (width > this.state.maxWidth) {
        height -= step
      } else if (height === maxHeight) {
        step = 0
      } else {
        height += step
      }

    } while (steps && (step > 0.01 || width > this.state.maxWidth))

    return height + "px"
  }


  render() {
    const text = this.props.item.text
    const dates = this.props.item.dates
    const fontSize = this.getOptimumFontSize(text, dates)

    return (
      <StyledItem
        height={this.state.fullHeight}
        id="item"
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