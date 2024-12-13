import React from 'react'
import { useState } from 'react'

const Posts = () => {
    const[isLoading,setIsLoading]=useState(false)
    const [post,setPosts]=useState([])
    const [error,setError]=useState("");
 
    // const handleFetch=()=>{
    //     setIsLoading(true)
    //     fetch('https://jsonplaceholder.typicode.com/todos/')
    //     .then(res=>res.json())
    //     .then((data)=>{
    //         setPosts(data)
    //         setIsLoading(false)
    //     }).catch((err)=>{
    //         setIsLoading(false)
    //          setError(true)})
    // }

    const handleFetch=async()=>{
        try{
            const resp=await fetch("https://fakestoreapi.com/products/");
            const data= await resp.json();
            console.log(data)
            setPosts(data)
        }
        catch(err){
          console.log(err)
        }
     
    }
  return (
    <div style={{display:"grid",placeItems:"center"}}>
        <button onClick={handleFetch}>{isLoading?"Wait":"Fetch Post"}</button>
        {
        post.map((data)=>{
                return(
                    <>
                    <img src={data.image} width={200} height={200}/>
                    <h4 style={{color:"brown"}}>{data.title.slice(0,10)}</h4>
                    </>
                )
            })
        }
        <span style={{color:"red"}}>{error&&"Something went wrong"}</span>
    </div>
  )
}

export default Posts