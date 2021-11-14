import React, { PureComponent, createRef } from 'react'

class Cpn extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      msg: 'Cpn',
    }
  }

  render() {
    return <h2>{this.state.msg}</h2>
  }

  change() {
    this.setState({
      msg: '我被修改了',
    })
  }
}

export default class App extends PureComponent {
  constructor(props) {
    super(props)

    this.titleRef = createRef()
    this.CpnRef = createRef()
    this.titleEl = null
  }

  render() {
    return (
      <div>
        <h2 ref="titleRef">Hello Ref</h2>
        <h2 ref={this.titleRef}>Hello Ref</h2>
        <h2 ref={(e) => (this.titleEl = e)}>Hello Ref</h2>
        <button onClick={(e) => this.changeText()}>改变文本</button>
        <hr />
        <Cpn ref={this.CpnRef}></Cpn>
      </div>
    )
  }

  changeText() {
    this.refs.titleRef.innerHTML = 'wangxin'
    this.titleRef.current.innerHTML = 'wangxin'
    this.titleEl.innerHTML = 'wangxin'

    console.log(this.CpnRef.current)
    this.CpnRef.current.change()
  }
}
