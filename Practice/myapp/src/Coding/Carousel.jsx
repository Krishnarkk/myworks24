import React,{useEffect,useState} from 'react'
import "./Carousel.css"
const Carousel = () => {
   
    const[slide,setSlide]=useState(0);
    // const fetchImages=async()=>{
    //    const res=await fetch('https://fakestoreapi.com/products/');
    //     const prodData=await res.json();
    //     setProducts(prodData)
    // }
    // useEffect(()=>{
    //     fetchImages();
    // },[])

    const products=[
        {
          id:0,
          image:"https://images.unsplash.com/photo-1722238584402-c736306f2362?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8"
        },
        {
            id:1,
            image:"https://images.unsplash.com/photo-1722283632205-15f4c41d7ef2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D"
          },
          {
            id:2,
            image:"https://images.unsplash.com/photo-1722172118259-6a3a4044b2ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1NHx8fGVufDB8fHx8fA%3D%3D"
          },
            {
            id:3,
            image:"https://images.unsplash.com/photo-1722202526639-f8d02eff9308?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8RnpvM3p1T0hONnd8fGVufDB8fHx8fA%3D%3D"
            }
    ]


    const handleLeft=()=>{
        setSlide(slide===0?products.length-1:slide-1)
    }
    const handleRight=()=>{
        setSlide(slide===products.length-1?0:slide+1)
    }
  return (
    <div>
        <h1 style={{textAlign:"center"}}>Products</h1>
        <div className='product-container'>
            <div className='left' onClick={handleLeft}>⏮️</div>
        {
           products.map(({image,id})=>{
            return(
                <div>
                  <img src={image} alt="not-found" key={id} className={slide===id?"product-img":"hidden"}/>
                </div>
            )
           })
        }
        <div className='right' onClick={handleRight}>⏭️</div>
        </div>
    </div>
  )
}

export default Carousel

