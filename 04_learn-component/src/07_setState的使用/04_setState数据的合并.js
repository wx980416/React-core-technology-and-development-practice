import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      message: 'Hello World',
      name: 'wangxin',
    }
  }

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <h2>{this.state.name}</h2>
        <button onClick={(e) => this.changeText()}>改变文本</button>
      </div>
    )
  }

  changeText() {
    this.setState({
      message: '你好啊,李银河',
    })

    // 内部只会覆盖相同的属性
    console.log(
      Object.assign(
        {},
        {
          message: '你好啊,李银河',
        },
        this.state
      )
    )
  }
}
