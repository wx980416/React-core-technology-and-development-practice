import React, { Component } from 'react'

import PropTypes from 'prop-types'

export default class TabControl extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentIndex: 0,
    }
  }
  render() {
    const { titleList } = this.props
    const { currentIndex } = this.state
    return (
      <div className="tab-control">
        {titleList.map((item, index) => {
          return (
            <div
              className={'tab-item ' + (index === currentIndex ? 'active' : '')}
              key={index}
              onClick={(e) => this.itemClick(index)}
            >
              <span>{item}</span>
            </div>
          )
        })}
      </div>
    )
  }

  itemClick(index) {
    console.log('TablControl触发', index)

    this.setState({
      currentIndex: index,
    })

    // 抛出事件
    const { itemClick } = this.props
    itemClick(index)
  }
}
TabControl.propTypes = {
  titleList: PropTypes.array.isRequired,
}
