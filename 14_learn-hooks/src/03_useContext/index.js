import React, { useContext } from 'react'

import { ValueContext } from '../App'

export default function UseContext() {
  const value = useContext(ValueContext)
  console.log(value)
  console.log(value.messgae)

  return <div></div>
}
