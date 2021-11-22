import React, { PureComponent } from 'react'

import store from '../../store'

import { addACtion, delAction } from '../../store/actionCreators'

export default class Home extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      counter: store.getState().counter,
    }
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        counter: store.getState().counter,
      })
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    return (
      <div>
        <h2>{this.state.counter}</h2>
        <button onClick={(e) => this.add(10)}>+10</button>
        <button onClick={(e) => this.del(10)}>-10</button>
      </div>
    )
  }

  add(num) {
    store.dispatch(addACtion(num))
  }

  del(num) {
    store.dispatch(delAction(num))
  }
}
