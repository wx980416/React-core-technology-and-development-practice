import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      message: 'Hello World',
    }
  }

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={(e) => this.changeText()}>改变文本</button>
        <button id="btn">改变文本2</button>
      </div>
    )
  }

  componentDidMount() {
    // 原生监听事件
    document.getElementById('btn').addEventListener('click', () => {
      this.setState({
        message: '你好啊,李银河',
      })
      console.log(this.state.message)
    })
  }

  changeText() {
    // setTimeout定时器
    setTimeout(() => {
      this.setState({
        message: '你好啊,李银河',
      })
      console.log(this.state.message)
    }, 0)

    // this.setState({
    //   message: '你好啊,李银河',
    // })
    // console.log(this.state.message)
  }
}
