import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <ChildCpn name="王鑫" age="23"></ChildCpn>
      </div>
    )
  }
}

class ChildCpn extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    console.log(this.props, 'componentDidMount')
  }

  render() {
    const { name, age } = this.props
    return (
      <div>
        <h2>我是childCpn组件</h2>
        <h2>子组件展示的数据：{name + '-' + age}</h2>
      </div>
    )
  }
}
