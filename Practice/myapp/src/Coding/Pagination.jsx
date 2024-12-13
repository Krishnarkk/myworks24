import React,{useState,useEffect} from 'react'
import "./Pagination.css"
const Pagination = () => {
    const[datas,setDatas]=useState([])
    const [page,setPage]=useState(3)
    const fetchProducts=async()=>{
        const res=await fetch("https://dummyjson.com/products")
        const data=await res.json();
        setDatas(data.products)
    }
    useEffect(()=>{
      fetchProducts()
    },[])

    console.log(datas)
  return (
    <>
    <div className='products'>
    {
      datas.slice(0,page).map((elem)=>{
        return(
            <span className='productsSingle'>
            <img src={elem.thumbnail} alt="image" style={{objectFit:"cover"}}/>
            <span style={{color:"white"}}>{elem.title.trim()}</span>
            </span>
        )
      })
    }
    </div>
    {
        page<datas.length&&
    
    <button style={{    textAlign: "center",
    position: "relative",
    left: "50%",
    right: "50%"}} onClick={()=>setPage((prev)=>prev+3)}>Show more</button>
    }
    </>
  )
}

export default Pagination