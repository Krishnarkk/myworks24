import React,{useRef} from 'react'

const UncontrolledComponents = () => {
          const nameRef=useRef();
          const emailRef=useRef();
    const formSubmit=()=>{
          console.log(nameRef.current.value,emailRef.current.value)
    }
  return (
    <div>
     
        <form onSubmit={formSubmit}>      
             <input type='text' placeholder='username' ref={nameRef}/>
        <input type='email' placeholder='enter email' ref={emailRef}/>
        <input type='submit'></input>
        </form>
    <h1>Name:{nameRef.current.value()}</h1> 
        <h1>Email:{emailRef.current.value()}</h1>
    </div>
  )
}

export default UncontrolledComponents