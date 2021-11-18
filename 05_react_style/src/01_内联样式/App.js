import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      stateStyle: {
        fontSize: '50px',
        color: 'blue',
      },
    }
  }

  render() {
    const fontStyle = {
      fontSize: '200px',
      color: 'pink',
    }

    return (
      <div>
        <h2 style={{ fontSize: '100px', color: 'red' }}>内联css</h2>
        <h2 style={fontStyle}>内联css</h2>
        <h2 style={this.state.stateStyle}>内联css</h2>
      </div>
    )
  }
}
