import React, { useState } from 'react'

const Child = ({onColorChange}) => {
    console.log(onColorChange)
    const[value,setValue]=useState("")
 const  handleInputChange=(e)=>{
    setValue(e.target.value)
    onColorChange(e.target.value)
 }
    
  return (
    <div> 
        <input type="text" onChange={handleInputChange} value={value}/>
    </div>
  )
}

export default Child