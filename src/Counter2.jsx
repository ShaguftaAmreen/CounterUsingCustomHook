import React from 'react'
import useCounter from './useCounter'

const Counter2 = () => {
//   let [count,fun1,fun2] = useCounter()
const {fun1,fun2,count}=useCounter()
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={fun1}>Increment</button>
      <button onClick={fun2}>Decrement</button>
    </div>
  )
}

export default Counter2;
