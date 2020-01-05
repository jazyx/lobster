import React, { Component } from 'react';
import './App.css';
import Item from './Components/item'
import Info from './Components/info'
import Buttons from './Components/buttons'


class App extends Component {
  constructor(props) {
    super(props)

    this.go = this.go.bind(this)
    this.state = { item: { text: "No items loaded " }, index: 0 }
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
  }


  initialize() {
    this.last = this.items.length - 1
    //this.shuffle(this.items)
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
    this.setState({ item, index })
  }


  render() {
    return (
      <div className="App">
        <Item
          item={this.state.item}
        />
        <Info
          item={this.state.item}
        />
        <Buttons
          onClick={this.go}
          first={this.state.index === 0}
          last={this.state.index === this.last}
        />
      </div>
    );
  }
}

export default App;
