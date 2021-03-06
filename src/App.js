import React, { Component } from 'react';
import './App.css';
import Item from './Components/item'
import Info from './Components/info'
import Buttons from './Components/buttonBar'
import Menu from './Components/menu'


class App extends Component {
  constructor(props) {
    super(props)

    this.go = this.go.bind(this)
    this.show = this.show.bind(this)
    this.showMenu = this.showMenu.bind(this)
    this.toggleInfo = this.toggleInfo.bind(this)
    this.toggleImage = this.toggleImage.bind(this)

    this.state = {
      item:      { text: "" } //, category: "", image: {}, details: []
    , index:     0
    , empty:     ["info", "words"]
    //info:      <undefined | "info" | "words" | "credits">
    //menu:      <falsy | true>
    //hideInfo:  <falsy | true>
    //showImage: <falsy | true>
    }
    this.last = 0

    fetch("data/data.json")
    .then(
      result => result.json()
                .then(data => {
                   this.colours = data.colours
                   this.items = data.items
                   this.initialize()
                 })

    , error  => console.log(error)
    )

    window.addEventListener("resize", this.toggleInfo, false)
  }


  initialize() {
    this.last = this.items.length - 1
    this.shuffle(this.items)
    this.toggleInfo()
    this.go(0)
  }


  shuffle(array) {
    let ii = array.length

    while (ii) {
      const jj = Math.floor(Math.random() * ii)
      ii -= 1
      const temp = array[ii]
      array[ii] = array[jj]
      array[jj] = temp
    }

    return array // for chaining
  }


  go(index) {
    switch (index) {
      case "next":
        index = Math.min(this.state.index + 1, this.last)
      break
      case "back":
        index = Math.max(0, this.state.index - 1)
      break
      default:
        if (isNaN(index) || index < 0 || index > this.last) {
          return
        }
    }

    const item = this.items[index]
    const empty = this.getEmpty(item)
    this.setState({ item, index, empty })
  }


  getEmpty(item) {
    const empty = []

    if (!item.words || item.words.length === 0) {
      empty.push("words")
    }
    if (!item.details || item.details[0] === "ZZZ") {
      empty.push("info")
    }

    return empty
  }


  show(infoType) {
    let info = this.state.info
    if (info !== infoType) {
      info = infoType
    } else {
      info = undefined
    }

    this.setState({ info })
  }


  showMenu(event) {
    if (event === "close" || event.target.tagName === "DIV") {
      const menu = !this.state.menu
      this.setState({ menu })
    }
  }


  toggleInfo() {
    const rect = document.body.getBoundingClientRect()
    const hideInfo = (rect.width > rect.height) // true in landscape
    this.setState({ hideInfo })
  }


  toggleImage() {
    const showImage = !this.state.showImage
    this.setState({ showImage, menu: false })
  }


  render() {
    return (
      <div className="App">
        <Item
          item={this.state.item}
          showImage={this.state.showImage}
        />
        <Info
          item={this.state.item}
          info={this.state.info}
        />
        <Buttons
          go={this.go}
          show={this.show}
          info={this.state.info}
          hide={this.state.hideInfo}
          first={this.state.index === 0}
          last={this.state.index === this.last}
          empty={this.state.empty}
          showMenu={this.showMenu}
        />
        <Menu
          show={this.state.menu}
          showImage={this.state.showImage}
          toggleImage={this.toggleImage}
          close={() => this.showMenu("close")}
        />
      </div>
    );
  }
}

export default App;
