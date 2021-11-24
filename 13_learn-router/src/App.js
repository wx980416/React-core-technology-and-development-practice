import React, { PureComponent } from 'react'

import { HashRouter, Link, Routes, Route } from 'react-router-dom'
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

            <Routes>
              {/* 旧版写法 */}
              {/* <Route exact path="/" component={Home}></Route>
              <Route path="/about" component={About}></Route>
              <Route path="/myInfo" component={MyInfo}></Route> */}

              {/* 新版写法 */}
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
