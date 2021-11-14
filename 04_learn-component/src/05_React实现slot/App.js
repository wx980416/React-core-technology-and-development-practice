import React, { Component } from 'react'

import NavBar from './NavBar'
import NavBar2 from './NavBar2'

export default class App extends Component {
  render() {
    const leftSlot = <span>111</span>
    const centerSlot = <span>222</span>
    const rightSlot = <span>333</span>

    return (
      <div>
        <NavBar>
          <span>退出</span>
          <span>首页</span>
          <span>中心</span>
        </NavBar>

        <NavBar2
          leftSlot={leftSlot}
          centerSlot={centerSlot}
          rightSlot={rightSlot}
        ></NavBar2>
      </div>
    )
  }
}
