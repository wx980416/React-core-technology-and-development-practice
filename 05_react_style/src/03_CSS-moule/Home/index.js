import React, { PureComponent } from 'react'

import style from './style.module.css'

export default class Home extends PureComponent {
  render() {
    return (
      <div>
        <h2 className={style.Home}>我是Home</h2>
      </div>
    )
  }
}
