import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0,
    }
  }

  render() {
    return (
      <div>
        <h2>counter:{this.state.counter}</h2>
        <button onClick={(e) => this.increment()}>+1</button>

        <ChildCpn increment={() => this.increment()}></ChildCpn>
      </div>
    )
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1,
    })
  }
}

class ChildCpn extends Component {
  render() {
    const { increment } = this.props

    return (
      <div>
        <button onClick={increment}>+1</button>
      </div>
    )
  }
}
