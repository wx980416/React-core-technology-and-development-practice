import React, { PureComponent } from 'react'
import request from './service/request'

export default class App extends PureComponent {
  render() {
    request({
      url: '/get',
      params: {
        name: 'wangxin',
        age: 23,
      },
    }).then((res) => {
      console.log(res)
    })
    return (
      <div>
        <h1>React-axios</h1>
      </div>
    )
  }
}
