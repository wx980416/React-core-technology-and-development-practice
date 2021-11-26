import React, { useState } from 'react'

export default function UseState() {
  const [count, setCount] = useState(() => 10)

  const [name, setName] = useState('wangxin')

  return (
    <div>
      <h2>当前计数: {count}</h2>
      <button onClick={(e) => setCount(count + 1)}>+1</button>
      <button onClick={(e) => setCount(count - 1)}>-1</button>
      <hr />
      <h2>name:{name}</h2>
      <input value={name} onChange={(e) => setName(e.target.value)}></input>
    </div>
  )
}
