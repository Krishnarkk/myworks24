import React,{useState,useEffect} from "react"
const Stopwatch=()=>{
    const [seconds,setSeconds]=useState(0);
    const [isActive,setIsActive]=useState(false);
    useEffect(()=>{
        let intervalId=null;
        if(isActive){
            intervalId=setInterval(()=>{
                setSeconds((prevSeconds)=>prevSeconds+1)
            },1000)
        }
  
        return ()=>clearInterval(intervalId)

    },[isActive])
  const handleActions=(btnState)=>{
      return btnState==="stop"?setIsActive(false):setIsActive(true)
  }

  console.log(isActive)

  const formatTime=(seconds)=>{
    const hours=Math.floor(seconds/3600)
    const minutes=Math.floor(seconds/60)%60
    const secs=seconds%60;
    return `${hours}:${minutes}:${secs}`
  }

  const handleRestart=()=>{
    setIsActive(false)
    setSeconds(0)
  }
    return(
        <div>
        <h1>The time is : {formatTime(seconds)}</h1>
            {
                !isActive?(<button onClick={()=>handleActions("start")}>Start</button>
            ):<button onClick={()=>handleActions("stop")}> Stop</button>

            }
            {
            <button onClick={handleRestart}>Reset</button>

            }
        </div>
    )
}
export default Stopwatch;