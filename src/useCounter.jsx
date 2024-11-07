import  { useState } from 'react'

const useCounter = (initialstate=0) => {
let [count,setCount]=useState(initialstate);

   function fun1(){
    setCount(count+1)
   }
  function fun2(){
    setCount(count-1)
  }

return {count,fun1,fun2};
}

export default useCounter;
