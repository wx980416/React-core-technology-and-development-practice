import React, { PureComponent } from 'react'

import Input from './components/input'
import Item from './components/item'

export default class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      contentList: [],
    }
  }

  render() {
    return (
      <div style={{ width: '500px', padding: '20px' }}>
        <h2>用户评论案例</h2>
        <hr />
        {this.state.contentList.map((item, index) => {
          return (
            <Item
              key={item.id}
              comment={item}
              removeItem={(e) => this.removeComment(index)}
            />
          )
        })}
        <Input inputAdd={(info) => this.inputAdd(info)} />
      </div>
    )
  }

  inputAdd(info) {
    console.log('我是传递给App的值：', info)
    const newContentList = [...this.state.contentList, info]
    this.setState({
      contentList: newContentList,
    })
  }

  removeComment(index) {
    const newContentList = [...this.state.contentList]
    newContentList.splice(index, 1)
    this.setState({
      contentList: newContentList,
    })
  }
}
