import React, { PureComponent } from 'react'

import { HashRouter, Link, Routes, Route, NavLink } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import MyInfo from './pages/MyInfo'

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <h2>
          App
          <HashRouter>
            <Link to="/">首页</Link>
            <Link to="/about">About</Link>
            <Link to="/myInfo">MyInfo</Link>
            <br />
            <NavLink to="/">首页</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/myInfo">MyInfo</NavLink>
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/myInfo" element={<MyInfo />}></Route>
            </Routes>
          </HashRouter>
        </h2>
      </div>
    )
  }
}
