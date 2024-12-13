const fetchProducts=async()=>{
    try{
        const products=await fetch("https://dummyjson.com/products");
         result=await products.json()
         console.log(result);
         
    }
    catch(error){
            console.log(error)
    }

}
console.log(fetchProducts())

//IIFE
(async function(){
    try{
        const prods=await fetch("https://dummyjson.com/products");
        console.log(prods)
        const results=await prods.json();
        console.log(results)
    }
    catch(er){
        console.log(er)
    }
})();