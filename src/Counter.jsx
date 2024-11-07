import React from 'react'
import useCounter from './useCounter'


const Counter = () => {
   const {count,fun1,fun2}= useCounter(10)
  return (
    <div>
            <h1>{count}</h1>
<button onClick={fun1}>Increment</button>
<button onClick={fun2}>Decrement</button>
    </div>
  )
}

export default Counter
