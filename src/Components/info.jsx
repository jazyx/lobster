/** info.js **
 *
 *   
**/

import React, { Component } from 'react';
import styled from 'styled-components'
import InfoButtons from './infoButtons'
import Image from './image'


const StyledInfoDiv = styled.div`
  position: relative;
  width: ${props => props.size}px;
  height: ${props => props.size}px;

  @media (min-aspect-ratio: 1/1) {
    height: 0
    display: none;
  }
`


const StyledUList = styled.ul` 
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 3.5vmin;
  list-style: none;
  margin: 0;
  padding: 0;

  & li {  
    margin: 0.25em 0;
  }

  & a {
    color: #fff;
  }
`


export default class Info extends Component {
  constructor(props) {
    super(props)

    this.infoClick     = this.infoClick.bind(this)
    this.toggleCredits = this.toggleCredits.bind(this )
    this.adjustSize    = this.adjustSize.bind(this)
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


  infoClick(event) {
    const infoType = event.target.id
    // may be undefined when a button is hidden

    if (this["toggle"+infoType]) {
      this["toggle"+infoType]()
    }
  }


  toggleInfo() {
    const info = !this.state.info

    this.setState({ info, dim: info })
  }


  toggleCredits(event) {
    // Prevent this method from triggering twice if the user clickso
    // on the Credits button to hide the credits
    if (this.creditsTimeout) {
      return
    }
    const preventSecondEvent = () => {
      clearTimeout(this.creditsTimeout)
      this.creditsTimeout = 0
    }

    // Treat an intentional click on the credits... or elsewhere
    const credits = !this.state.credits
    this.setState({ credits, dim: credits })

    const body = document.body
    if (event) {
      body.removeEventListener("mousedown", this.toggleCredits, false)
      this.creditsTimeout = setTimeout(preventSecondEvent, 100)

    } else {
      body.addEventListener("mousedown", this.toggleCredits, false)
    }
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

    if (!details) {
      return ""
    }

    const info = details.map((item, index) => (
      <li key={index}>
        {item}
      </li>
    ))

    return info
  }


  getInfo() {
    let info

    if (this.state.credits) {
      info = this.getCredits()

    } else if (this.state.info) {
      info = this.getDetails()
    }

    if (info) {
      return (
        <StyledUList>
          {info}
        </StyledUList>
      )
    }

    return ""
  }


  getHide() {
    if (!this.props.item.image) {
      return "credits"
    } else if (!this.props.item.details) {
      return "info"
    }

    const hide = this.state.credits
               ? "info"
               : this.state.info
                 ? "credits"
                 : ""

    return hide
  }


  render() {
    const info = this.getInfo()
    const hide = this.getHide()

    return (
      <StyledInfoDiv
        size={this.state.size}
      >
        <InfoButtons 
          onClick={this.infoClick}
          hide={hide}
        />
        <Image
          image={this.props.item.image}
          dim={this.state.dim}
        />
        {info}
      </StyledInfoDiv>
    )
  }
}