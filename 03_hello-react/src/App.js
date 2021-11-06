import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }

  render() {
    return (
      <div>
        <h1>当前计数：{this.state.count}</h1>
        <button onClick={() => this.add()}>+</button>
        <button onClick={() => this.del()}>-</button>
      </div>
    )
  }

  add() {
    this.setState({
      count: this.state.count + 1,
    })
  }

  del() {
    this.setState({
      count: this.state.count - 1,
    })
  }
}
