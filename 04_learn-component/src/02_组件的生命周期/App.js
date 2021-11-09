import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      counter: 0,
      isShow: false,
    }

    console.log('执行了组件的constructor方法')
  }

  render() {
    console.log('执行了组件的render方法')

    return (
      <div>
        <h2>组件的生命周期</h2>
        <hr />
        <h2>当前计数：{this.state.counter}</h2>
        <button
          onClick={() => {
            this.increment()
          }}
        >
          +1
        </button>

        <hr></hr>
        <button onClick={(e) => this.changeCpnShow()}>切换Cpn组件显示</button>
        {this.state.isShow && <Cpn></Cpn>}
      </div>
    )
  }

  changeCpnShow() {
    this.setState({
      isShow: !this.state.isShow,
    })
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1,
    })
  }

  componentDidMount() {
    console.log('执行了组件的componentDidMount方法')
  }

  componentDidUpdate() {
    console.log('执行了componentDidUpdate方法')
  }
}

class Cpn extends Component {
  render() {
    return <h2>我是Cpn组件</h2>
  }

  componentDidUpdate() {
    console.log('执行了componentDidUpdate方法')
  }
}
