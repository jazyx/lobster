/** info.js **
 *
 *
**/

import React, { Component } from 'react';
import styled from 'styled-components'
import Image from './image'


const StyledInfoDiv = styled.div`
  position: relative;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  padding-bottom: ${props => props.padding}px;

  @media (min-aspect-ratio: 1/1) {
    height: 0
    display: none;
  }
`

const StyledListWrapper = styled.div`
  height: calc(100% - 10vmin);
  display: flex;
  flex-direction: column;
  justify-content: space-around;

`

const StyledUList = styled.ul`
  width: 100%;
  z-index: 1;

  font-size: 3.3vmin;
  list-style: none;
  margin: 0;
  padding: 0;
  overflow-y: auto;

  & li {
    margin: 0.33em 0;
  }

  & a {
    color: #fff;
  }
`


export default class Info extends Component {
  constructor(props) {
    super(props)

    this.adjustSize    = this.adjustSize.bind(this)
    window.addEventListener("resize", this.adjustSize, false)

    const sizes = this.getSizes()
    this.state = sizes
  }


  componentDidMount() {
    this.adjustSize()
  }


  adjustSize() {
    const sizes = this.getSizes()
    this.setState( sizes )
  }


  getSizes() {
    const rect = document.body.getBoundingClientRect()
    const size = Math.min(rect.width, rect.height * 0.8)

    // HACK: padding would be better treated as 10vmin, but Android
    // doesn't seem to like that
    const padding = rect.width * 0.1
    return { size, padding }
  }


  getCredits() {
    const credits = this.props.item.image
    // { "src": "marilyn.jpg"
    // , "author": "Frank Powolny"
    // , "source": "https://commons.wikimedia.org/xxx.jpg"
    // , "licence": "Public Domain"
    // , "licenceURL": ""
    // }

    if (!credits || credits.source === "XXX") {
      return ""
    }

    const info = []
    if (credits.author) {
      info.push(<li key="author">Image by {credits.author}</li>)
    }

    info.push(
      <li key="source">
        <a href={credits.source} target="credits">Original image</a>
      </li>
    )

    if (credits.licenceURL) {
      info.push(
        <li key="licence">
          <a href={credits.licenceURL}>{credits.licence}</a>
        </li>
      )
    } else {
      info.push(<li key="licence">{credits.licence}</li>)
    }

    return info
  }


  getDetails() {
    const details = this.props.item.details
    // { "src": "marilyn.jpg"
    // , "author": "Frank Powolny"
    // , "source": "https://commons.wikimedia.org/xxx.jpg"
    // , "licence": "Public Domain"
    // , "licenceURL": ""
    // }

    if (!details || details[0] === "ZZZ") {
      return ""
    }

    const info = details.map((item, index) => (
      <li key={index}>
        {item}
      </li>
    ))

    return info
  }


  getWords() {
    const words = this.props.item.words

    if (!words || !words.length) {
      return ""
    }

    const info = words.map((item, index) => (
      <li key={index}>
        {item}
      </li>
    ))

    return info
  }


  getInfo(infoType) {
    switch (infoType) {
      case "credits":
        return this.getCredits()

       case "words":
         return this.getWords()

       case "info":
         return this.getDetails()
    }


    return ""
  }


  getDetails() {
    const details = this.props.item.details
    // { "src": "marilyn.jpg"
    // , "author": "Frank Powolny"
    // , "source": "https://commons.wikimedia.org/xxx.jpg"
    // , "licence": "Public Domain"
    // , "licenceURL": ""
    // }

    if (!details || details[0] === "ZZZ") {
      return ""
    }

    const info = details.map((item, index) => (
      <li key={index}>
        {item}
      </li>
    ))

    return info
  }


  render() {
    let info = this.getInfo(this.props.info)

    if (info) {
      info = (
        <StyledUList>
          {info}
        </StyledUList>
      )
    }

    return (
      <StyledInfoDiv
        size={this.state.size}
        padding={this.state.padding}
      >
        <Image
          image={this.props.item.image}
          dim={!!this.props.info}
        />
        <StyledListWrapper>
          {info}
        </StyledListWrapper>
      </StyledInfoDiv>
    )
  }
}