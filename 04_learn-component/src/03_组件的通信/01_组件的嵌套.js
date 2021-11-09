import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
    )
  }
}

function Header() {
  return <h2>我是Header组件</h2>
}

function Banner() {
  return <h2>我是Banner组件</h2>
}

function ProductList() {
  return (
    <ul>
      <li>列表：1</li>
      <li>列表：2</li>
      <li>列表：3</li>
      <li>列表：4</li>
    </ul>
  )
}

function Main() {
  return (
    <div>
      <Banner></Banner>
      <ProductList></ProductList>
    </div>
  )
}

function Footer() {
  return <div>我是Footer组件</div>
}
