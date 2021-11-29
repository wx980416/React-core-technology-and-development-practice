import React, { useState, useEffect } from 'react'

export default function UseEffect() {
  const [count, setCount] = useState(() => 0)

  useEffect(() => {
    console.log('组件更新了')
  }, [])

  useEffect(() => {
    console.log('组件注册了事件')
    return () => {
      console.log('组件销毁了事件')
    }
  }, [])

  useEffect(() => {
    console.log('count 发生了变化', count)
  }, [count])

  return (
    <div>
      <h2>当前计数: {count}</h2>
      <button onClick={(e) => setCount(count + 1)}>+1</button>
      <button onClick={(e) => setCount((prevent) => prevent - 1)}>-1</button>
    </div>
  )
}
