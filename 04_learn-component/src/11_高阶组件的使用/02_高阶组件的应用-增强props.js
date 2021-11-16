import React, { PureComponent } from 'react'

function enhanceSexProps(WrappedComponent) {
  return (props) => {
    return <WrappedComponent {...props} sex="man"></WrappedComponent>
  }
}

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

const EnhanceHome = enhanceSexProps(Home)

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <h2>App</h2>
        <EnhanceHome name="wangxin" age={23} />
      </div>
    )
  }
}
