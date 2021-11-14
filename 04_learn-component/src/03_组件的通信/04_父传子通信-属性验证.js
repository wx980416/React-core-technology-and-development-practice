import React, { Component } from 'react'

import PropTyps from 'prop-types'

export default class APP extends Component {
  render() {
    return (
      <div>
        <ChildCpn name="王鑫" age={23} nums={[1, 2, 3, 4, 5]}></ChildCpn>
        <ChildCpn></ChildCpn>

        <hr />

        <ChildCpn2
          name="王鑫2"
          age={233}
          nums={[11, 22, 33, 44, 55]}
        ></ChildCpn2>
        <ChildCpn2></ChildCpn2>
      </div>
    )
  }
}

class ChildCpn2 extends Component {
  render() {
    const { name, age, nums } = this.props
    return (
      <div>
        <h1>ChildCpn2</h1>
        <h2>{name + '--' + age}</h2>
        <ul>
          {nums.map((item) => {
            return <li>{item}</li>
          })}
        </ul>
      </div>
    )
  }

  static propTypes = {
    name: PropTyps.string.isRequired,
    age: PropTyps.number,
    nums: PropTyps.array,
  }

  static defaultProps = {
    name: 'wangxin2222',
    age: 1231,
    nums: [1111, 12312, 1312, 2131],
  }
}

function ChildCpn(props) {
  const { name, age, nums } = props

  return (
    <div>
      <h2>{name + '--' + age}</h2>
      <ul>
        {nums.map((item) => {
          return <li>{item}</li>
        })}
      </ul>
    </div>
  )
}

// 添加校验
ChildCpn.propTypes = {
  name: PropTyps.string.isRequired,
  age: PropTyps.number,
  nums: PropTyps.array,
}

// 默认值
ChildCpn.defaultProps = {
  name: 'wangxin',
  age: 23,
  nums: [111, 222, 333, 444],
}
