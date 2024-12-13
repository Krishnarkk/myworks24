import React,{useState,useCallback} from 'react'
import Child from './Child'
const Parent = () => {
    const [count,setCount]=useState(0)
     const incr=useCallback(()=>{
        setCount((prev)=>prev+1)
     },[])
  return (
    <div>Parent
        <Child name="abc" />
        <button onClick={incr}>Incres</button>
    </div>
  )
}

export default Parent