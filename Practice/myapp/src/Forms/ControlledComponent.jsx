import React,{useState} from 'react'
const ControlledComponent = () => {
    const [inputData,setInputData] = useState({});

    const handleChange = (event)=>{
        const {name,value} = event.target;
        setInputData((inputData)=>({...inputData,[name]:value}))
    }
  return (
    <div>
        <form>
            <label>Name : {inputData?.username}</label>
            <InputComp label="username" type="text" placeholder="userName" value={inputData?.name} onChange={handleChange} name="username"/>
            <label>Psassword : {inputData?.password}</label>
            <InputComp label="password" type="password" placeholder="password" value={inputData?.password} onChange={handleChange} name="password"/>

        </form>
    </div>
  )
}

export default ControlledComponent;

export const InputComp=({label,type,placeholder,value,onChange,name})=>{
   
    return(
        <div>
            <label>{label}</label>
            <input name={name} type={type} placeholder={placeholder} value={value} onChange={onChange} />
        </div>
    )

}


