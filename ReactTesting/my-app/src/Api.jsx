import React,{useState,useEffect} from 'react';
import axios from "axios"

const Api = () => {

    const [products,setProducts]=useState([])
   const getProducts=async()=>{
    const response=await axios.get("https://fakestoreapi.com/products/");
    setProducts(response)
   }
   useEffect(()=>{
    getProducts()
   },[])
  return (
    <div style={{display:'flex',alignItems:"center",justifyContent:"center",flexWrap:"wrap",gap:"45px"}}>
        {
            products.data?.map((elm,i)=>{
                return(
                    <div key={i}>  
                        <img src={elm.image} width={200} height={200}/>
                        <p>{elm.title.slice(0,6)}</p>
                        <p>Price: ${elm.price}</p>
                        </div>
                )
            })
        }
    </div>
  )
}

export default Api