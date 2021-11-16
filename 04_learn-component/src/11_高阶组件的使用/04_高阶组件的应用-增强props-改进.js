import React, { PureComponent, createContext } from 'react'

function withUser(WrappedComponent) {
  return (props) => {
    return (
      <UserContext.Consumer>
        {(user) => {
          return (
            // <h2>
            //   Home:
            //   {`姓名：${user.name}-年龄：${user.age}-性别：${user.sex}`}
            // </h2>
            <WrappedComponent {...props} {...user}></WrappedComponent>
          )
        }}
      </UserContext.Consumer>
    )
  }
}

const UserContext = createContext({
  name: 'wangxin',
  age: 23,
  sex: 'man',
})

class Home extends PureComponent {
  render() {
    return (
      <h2>
        Home:
        {`姓名：${this.props.name}-年龄：${this.props.age}-性别：${this.props.sex}`}
      </h2>
    )
  }
}

class About extends PureComponent {
  render() {
    return (
      <h2>
        Home:
        <h1>
          {`姓名：${this.props.name}-年龄：${this.props.age}-性别：${this.props.sex}`}
        </h1>
      </h2>
    )
  }
}

const UserHome = withUser(Home)
const UserAbout = withUser(About)

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <h2>App</h2>
        <UserContext.Provider value={{ name: '2233', age: 18, sex: 'woman' }}>
          <UserHome />
          <UserAbout />
        </UserContext.Provider>
      </div>
    )
  }
}
