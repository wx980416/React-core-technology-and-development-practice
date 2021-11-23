import React, { PureComponent } from 'react'

import { connect } from 'react-redux'

import {
  addACtion,
  delAction,
  getHomeMultidataAction,
} from '../../store/actionCreators'

class Home extends PureComponent {
  componentDidMount() {
    this.props.getHomeMultidata()
  }

  render() {
    return (
      <div>
        <h2>{this.props.counter}</h2>
        <button onClick={(e) => this.props.add(10)}>+10</button>
        <button onClick={(e) => this.props.del(10)}>-10</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter,
})

const mapDispatchToProps = (dispatch) => ({
  add(num) {
    dispatch(addACtion(num))
  },
  del(num) {
    dispatch(delAction(num))
  },
  getHomeMultidata() {
    dispatch(getHomeMultidataAction)
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
