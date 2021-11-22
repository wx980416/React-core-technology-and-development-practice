import React, { PureComponent } from 'react'

import Home from './components/Home'
import About from './components/About'

export default class App extends PureComponent {
  render() {
    return (
      <div>
        App
        <Home />
        <hr />
        <About />
      </div>
    )
  }
}
