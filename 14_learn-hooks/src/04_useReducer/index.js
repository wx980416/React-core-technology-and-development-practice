import React, { useState, useReducer } from 'react'

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, counter: state.counter + 1 }
    case 'decrement':
      return { ...state, counter: state.counter - 1 }
    default:
      return state
  }
}

export default function Demo() {
  const [count, setCount] = useState(() => 0)
  const [state, dispatch] = useReducer(reducer, { counter: 0 })

  return (
    <div>
      <h2>当前计数: {count}</h2>
      <button onClick={(e) => setCount(count + 1)}>+1</button>
      <button onClick={(e) => setCount((prevent) => prevent - 1)}>-1</button>
      <hr />
      <h2>当前计数: {state.counter}</h2>
      <button onClick={(e) => dispatch({ type: 'increment' })}>+1</button>
      <button onClick={(e) => dispatch({ type: 'decrement' })}>-1</button>
    </div>
  )
}
