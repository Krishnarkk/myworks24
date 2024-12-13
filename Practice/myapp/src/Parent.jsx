import React,{useState} from 'react'
import Child from './Child'
const Parent = () => {
    const [color,setColor]=useState("")
      console.log("parent rendered")
      const handleColorChange=(val)=>{
        setColor(val)
      }
  return (
    <div>
        <div style={{width:'200px',height:"200px",borderRadius:"5px",backgroundColor:`${color}`,border:"2px solid red"}}></div>
        <Child  onColorChange={handleColorChange}/>
    
    </div>
  )
}

export default Parent