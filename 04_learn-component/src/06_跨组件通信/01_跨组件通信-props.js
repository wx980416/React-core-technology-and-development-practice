import React, { Component } from 'react'

function Grandson(props) {
  return (
    <div>
      <h2>我是孙子组件</h2>
      <p>{props.msg}</p>
    </div>
  )
}

function Son(props) {
  return (
    <div>
      <h2>我是儿子组件</h2>
      <Grandson {...props}></Grandson>
    </div>
  )
}

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      msg: '我是传递给孙子的信息',
    }
  }

  render() {
    return (
      <div>
        <h2>我是爸爸组件</h2>
        <Son {...this.state}></Son>
      </div>
    )
  }
}
