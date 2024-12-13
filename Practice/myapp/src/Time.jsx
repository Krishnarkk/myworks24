
import React,{useState} from 'react'

const Time = () => {
    const [hours,setHours]=useState(1)
    const [minutes,setMinutes]=useState(30)
    const handleIncrease=()=>{
        setMinutes(minutes+1)
        if(minutes===59){
            setHours(hours+1)
            setMinutes(0)
        }
    }

    const handleDecrease=()=>{
        setMinutes(minutes-1)
        if(minutes===0){
            setHours(hours-1)
            setMinutes(59)
        }
    }

 
    const handleInputChange=(e)=>{
        const name=e.target.name;
        const value=parseInt(e.target.value)

        if(name==="hours"){
            setHours(value)

        }
        else if(name==="minutes"){
            if(value>=60){
                setHours(hours+Math.floor(value/60))
                setMinutes(value%60)
            }
            else{
                setMinutes(value)
            }
        }

    }
    
  return (
    <div>
        <h1>Time : {hours} hours : {minutes}minutes</h1>
        {/* <input type='number' name="hours" readOnly value={hours} onChange={handleInputChange} /> */}
        <input type='number'name="minutes" value={minutes} onChange={handleInputChange}/>
        <input type='number'name="minutes" readOnly value={minutes} onChange={handleInputChange}/>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>

    </div>
  )
}

export default Time