import React, { Component } from 'react'

const UserContext = React.createContext({
  msg: '我是传递给孙子的默认信息',
})

function Grandson() {
  return (
    <UserContext.Consumer>
      {(value) => {
        return (
          <div>
            <h2>我是孙子组件</h2>
            <p>{value.msg}</p>
          </div>
        )
      }}
    </UserContext.Consumer>
  )
}
function Son(props) {
  return (
    <div>
      <h2>我是儿子组件</h2>
      <Grandson></Grandson>
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
        <UserContext.Provider value={this.state}>
          <Son></Son>
        </UserContext.Provider>
      </div>
    )
  }
}
