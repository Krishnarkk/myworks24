import  React,{ useState} from "react";
import Child from "./Child";
import NewChild from "./NewChild";

const New=()=>{
    const [color,setColor]=useState("");
    console.log(color)
    return(
        <>
        <div style={{border:"1px solid blue",width:"100px",height:"100px",backgroundColor:color}}>
          <p>Hi</p>
        </div>
            <br/> 
            <NewChild setColor={setColor}/>
            </>
    )
}
export default New;
