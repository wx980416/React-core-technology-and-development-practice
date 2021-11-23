import React, { PureComponent } from 'react'

import { connect } from 'react-redux'

import { addACtion, delAction } from '../../store/actionCreators'
class About extends PureComponent {
  render() {
    return (
      <div>
        <h2>{this.props.counter}</h2>
        <button onClick={(e) => this.props.add(1000)}>+1000</button>
        <button onClick={(e) => this.props.del(1000)}>-1000</button>
        <hr />
        <h1>banners</h1>
        <ul>
          {this.props.banners.map((item, index) => {
            return <li key={item.acm}>{item.title}</li>
          })}
        </ul>
        <h1>Recommend</h1>
        <ul>
          {this.props.recommends.map((item, index) => {
            return <li key={item.acm}>{item.title}</li>
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter,
  banners: state.banners,
  recommends: state.recommends,
})

const mapDispatchToProps = (dispatch) => ({
  add(num) {
    dispatch(addACtion(num))
  },
  del(num) {
    dispatch(delAction(num))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(About)
