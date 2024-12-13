import React, { useEffect, useState } from "react";
import Stopwatch from "./Coding/Stopwatch"
import Progress from "./Coding/Progress";
import Carousel from "./Coding/Carousel";
import Pagination from "./Coding/Pagination";
import Debounce from "./Coding/Debounce";
import Child from "./Child";
import Time from "./Time";
import Parent from "./Parent";
import ControlledComponent from "./Forms/ControlledComponent";
import UncontrolledComponents from "./Forms/UncontrolledComponents";
const App=()=>{
  console.log("parent re-rendered")
  const [value,setValue]=useState(10);
  useEffect(()=>{
   setValue((prev)=>prev+10)
  },[])

  const handleClick=()=>{
    setValue((prev)=>prev+10)
  }
  return(
    <>
    {/* <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}> */}
     {/* <Progress/>
     <Stopwatch/>
    </div>
     <div>
     <Carousel/>
     </div>
     <Debounce/>

     <Pagination/> */}

     {/* <Child/>
     <button onClick={handleClick}>CLick</button> */}
     {/* <Time/>
     <Parent/> */}

     {/* <Parent/> */}


     <ControlledComponent/>
     <h1>Uncontrolled form</h1>
     <UncontrolledComponents/>
     </>
  )
}
export default App;