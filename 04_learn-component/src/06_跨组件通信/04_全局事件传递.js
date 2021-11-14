import React, { PureComponent } from 'react'

// events
import { EventEmitter } from 'events'
const eventBus = new EventEmitter()

class Home extends PureComponent {
  componentDidMount() {
    eventBus.addListener('sayHello', this.handleSayHelloListener)
  }

  componentWillUnmount() {
    eventBus.removeListener('sayHello', this.handleSayHelloListener)
  }

  handleSayHelloListener(num, message) {
    alert(num, message)
  }
  render() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    )
  }
}

class Profile extends PureComponent {
  render() {
    return (
      <div>
        <h2>Profile</h2>
        <button onClick={(e) => this.eventEvent()}>
          点击了Profile按钮向Home组件传递数据
        </button>
      </div>
    )
  }

  eventEvent() {
    eventBus.emit('sayHello', '我是传递的参数', 'Hello Home')
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <h1>全局事件总线</h1>
        <Home></Home>
        <Profile></Profile>
      </div>
    )
  }
}
