// import React, { useReducer } from 'react'
// import {postReducer, INITIAL_STATE } from './PostsWithReducer'

// const PostsWithUseReducer = () => {
//     const[state,dispatch]=useReducer(postReducer,INITIAL_STATE);
//     const handleFetch=async()=>{
//         dispatch({type:"FETCH_START"})
//         try{
//            const response=await fetch("https://jsonplaceholder.typicode.com/todos/1")
//             const data=await response.json();
//             dispatch({type:"FETCH_SUCCESS",payload:data})
//         }
//             catch(err){
//                 dispatch({type:"FETCH_ERROR"})
//             }
//         }
    
//   return (
//     <div>
//         <button onClick={handleFetch}>{state.loading?"WAIT":"Fetch Post"}</button>
//         {/* {state.post?.map((item)=>{
//             <h5>{item.title}</h5>
//         })} */}
//         {state.post.title}
//         {state.error&& <span style={{color:'red'}}>Something went wrong</span>}
//     </div>
//   )


// export default PostsWithUseReducer


import React,{useEffect, useReducer} from 'react'
import { INITIAL_STATE, postReducer } from './PostsWithReducer'

const PostsWithUseReducer = () => {
    const [state,dispatch]=useReducer(postReducer,INITIAL_STATE)

    const handleFetch=()=>{
        dispatch({type:"FETCH_START"})
        fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(res=>res.json())
        .then((data)=>{
           dispatch({type:"FETCH_SUCCESS",payload:data})
        }).catch((err)=>{
          dispatch({type:"FETCH_ERROR"})
            })
    }

//     const handleFetch=async()=>{
//    //dispatch({type:"FETCH_START"})
//    try{
//     const response=await fetch('https://jsonplaceholder.typicode.com/todos/')
//     const data=await response.json();
//     console.log(data,"Data is ")
//     dispatch({type:"FETCH_SUCCEESS",payload:data})
    
//    }
//    catch(err){
//     dispatch({type:"FETCH_ERROR"})
//    }
//     }

  return (
    <div>PostsWithUseReducer
<button onClick={handleFetch}>FETCH</button>
{
    <h1>
    Title:{Array.isArray(state.post)?state.post.map(item=><p>{item.title}</p>):state.post.title}
    </h1>
}
    </div>
  )
}

export default PostsWithUseReducer