import React, { useState, useCallback, memo } from 'react'

const HYButton = memo((props) => {
  console.log('HYButton重新渲染: ' + props.title)
  return <button onClick={props.increment}>HYButton +1</button>
})

export default function Demo() {
  console.log('Demo重新渲染')
  const [count, setCount] = useState(0)
  const [show, setShow] = useState(true)

  const increment1 = () => {
    console.log('执行increment1函数')
    setCount(count + 1)
  }

  const increment2 = useCallback(() => {
    console.log('执行increment2函数')
    setCount(count + 1)
  }, [count])
  return (
    <div>
      <h2>CallbackHookDemo01: {count}</h2>
      <HYButton title="btn1" increment={increment1} />
      <HYButton title="btn2" increment={increment2} />
      <button onClick={(e) => setShow(!show)}>show切换</button>
    </div>
  )
}
