import React, { Component } from 'react'

import TabControl from './TabControl'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.titleList = ['新增', '首页', '账户']

    this.state = {
      currentTitle: '新增',
      currenIndex: 0,
    }
  }

  render() {
    return (
      <div>
        <TabControl
          titleList={this.titleList}
          itemClick={(index) => this.itemClick(index)}
        ></TabControl>
        <h2>{this.state.currentTitle}</h2>
      </div>
    )
  }

  itemClick(index) {
    console.log('App触发', index)

    this.setState({
      currentTitle: this.titleList[index],
    })
  }
}
