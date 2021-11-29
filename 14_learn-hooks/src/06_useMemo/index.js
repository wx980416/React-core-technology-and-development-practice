import React, { useState, useMemo, memo } from 'react'

function calcNumber(count) {
  console.log('calcNumber重新计算')
  let total = 0
  for (let i = 1; i <= count; i++) {
    total += i
  }
  return total
}

const HYInfo = memo((props) => {
  console.log('HYInfo重新渲染')
  return (
    <h2>
      名字: {props.info.name} 年龄: {props.info.age}
    </h2>
  )
})

export default function Demo() {
  console.log('Demo重新渲染了')
  const [count, setCount] = useState(10)
  const [show, setShow] = useState(true)

  const total = useMemo(() => {
    return calcNumber(count)
  }, [count])

  const info = useMemo(() => {
    return { name: 'why', age: 18 }
  }, [])

  return (
    <div>
      <h2>计算数字的和: {total}</h2>
      <button onClick={(e) => setCount(count + 1)}>+1</button>

      <HYInfo info={info} />
      <button onClick={(e) => setShow(!show)}>show切换</button>
    </div>
  )
}
