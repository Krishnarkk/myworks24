import React, { useState, useEffect } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [error,setError]=useState("")
  const fetchProducts = async () => {
    try{
        const response = await fetch("https://fakestoreapi.com/products/");
        const data = await response.json();
        setProducts(data);
    }
    catch(e){
        setError("failed to fetch products")
    }
    
};
useEffect(() => {
    fetchProducts();
}, []);

if(error) return <div>{error}</div>
console.log(error)
  return (
    <div>
      <h1 data-testid="prod-title">Product List</h1>
      {products.map((el,idx) => (
        <p key={idx}>{el.title}</p>
      ))}
    </div>
  );
};

export default Products;
