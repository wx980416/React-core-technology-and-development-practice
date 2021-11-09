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

function ChildCpn(props) {
  const { name, age } = props

  return <h2>子组件展示的数据：{name + '-' + age}</h2>
}
