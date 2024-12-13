import React ,{useState,useEffect}from 'react';
import "./Debounce.css"
const Debounce = () => {
 
    const[pincode,setPinCode]=useState("800001");
    const [cities,setCities]=useState([])
    // const searchCity=(value)=>{
    //    fetch(`https://api.postalpincode.in/pincode/${value}`).then(res=>res.json()).then(result=>console.log(result[0].PostOffice)).catch((err)=>console.log(err))
    // }

    useEffect(()=>{
        const searchCity=setTimeout(()=>{
            fetch(`https://api.postalpincode.in/pincode/${pincode}`).then(res=>res.json()).then(result=>setCities(result[0].PostOffice)).catch((err)=>console.log(err))
        },2000)
        return()=>{clearTimeout(searchCity)}
    },[pincode]);

    console.log(cities)

  return (
    <div>
        <h1 style={{textAlign:"center"}}>Search your city</h1>
        {/* <input onChange={(e)=>searchCity(e.target.value)} placeholder='enter your pincode here'/> */}
        <input className="inputCont" onChange={(e)=>setPinCode(e.target.value)} placeholder='enter your pincode here'/>
        {
            cities?.length>0?
        (<table>
            <thead>
            <th>Pincode</th>
            <th>Name</th>
            <th>Branch</th>
            </thead>
         {
            cities?.map((city)=>{
                return(
                    <tbody>
                        <tr>
                            <td>{city.Pincode}</td>
                            <td>{city.Name}</td>
                            <td>{city.District}</td>
                            </tr>
                            </tbody>
                )
            })
        }
        </table>)
:<p style={{textAlign:"center",padding:"3rem"}}>No results found</p>}
    </div>
  )
}

export default Debounce



