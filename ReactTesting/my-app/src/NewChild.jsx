import React from "react";
const NewChild=({setColor})=>{
    const handleColor=(e)=>{
        console.log(e.target.value)
        setColor(e.target.value)
    }
    return(
        <input type="text" onChange={handleColor} placeholder="enter color"/>
    )
}
export default NewChild;