import React, { PureComponent } from 'react'
// import UseContext from './03_useContext'

// import UseState from './01_useState'
// import UseEffect from './02_useEffect'
import Demo from './06_useMemo'

// export const ValueContext = createContext()

export default class App extends PureComponent {
  render() {
    return (
      <div>
        {/* <UseState /> */}
        {/* <UseEffect /> */}
        {/* <ValueContext.Provider value={{ messgae: '我是传递给子孙组件的数据' }}>
          <UseContext />
        </ValueContext.Provider> */}

        <Demo />
      </div>
    )
  }
}
