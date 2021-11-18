import React, { PureComponent } from 'react'

import './style.css'

import Home from '../Home'

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <h1 className="App">我是App</h1>
        <Home />
      </div>
    )
  }
}
