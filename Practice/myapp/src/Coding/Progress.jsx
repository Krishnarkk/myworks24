import React,{useState,useEffect} from 'react'
import Progressbar from './Progressbar'

const Progress = () => {
    const[progress,setProgress]=useState(0);
    const maxProgress=100;
    useEffect(()=>{
        const intervalId=setInterval(()=>{
                if(progress<100){
                  setProgress((prev)=>prev+10)
                }
        },1000)
        return ()=>clearInterval(intervalId)
    },[progress])
  return (
    <div>
        <Progressbar value={progress} max={maxProgress}/>
        <span>{progress===100 && <span>Done....👍</span>}</span>
    </div>
  )
}

export default Progress