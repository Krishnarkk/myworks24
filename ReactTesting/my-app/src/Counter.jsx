import React,{useState} from 'react'

const Counter = () => {
    const [count,setCount]=useState(0)

    const increment=()=>{
        setCount(prev=>prev+1)
    }
    const decrement=()=>{
        setCount(prev=>prev-1)
    }
    const reset=()=>{
        setCount(0)
    }
    const doubleIncrement=()=>{
        setCount(prev=>prev*2)
    }
  return (
    <div style={{}}>
        <h4>Counter : {count}</h4>
    <button onClick={increment} data-testid="increment">Increment</button>
    <button onClick={decrement} data-testid="decrement">Decrement</button>
    <button onClick={reset} data-testid="reset">Reset</button>
    <button onClick={doubleIncrement} data-testid="double">Double Increment</button>
    </div>
  )
}

export default Counter