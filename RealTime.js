const products = ['beans', 'pizza', 'chicken', 'salmon']
const mappedProd=products.map((prod)=>{
    return(
        `${prod.toUpperCase()}*`
    )
})
console.log(mappedProd)

const ProductsData=[
    {
        name:"ProdA",
        price:100,
        
    },
    {
        name:"ProdB",
        price:800,
        
    },{
        name:"ProdC",
        price:300,
        
    },{
        name:"ProdD",
        price:400,
        
    },{
        name:"ProdE",
        price:500,
        
    },{
        name:"ProdF",
        price:600,
        
    },{
        name:"ProdG",
        price:700,
        
    },
]

const discountProducts=ProductsData.map(product=>(product.price-(product.price*10)/100).toFixed(2))
console.log(discountProducts)

const discounts=ProductsData.map((product)=>{
    return{
        ...product,
        price:product.price-(product.price*0.1).toFixed(2),
        date:new Date().toUTCString()
    }
})

console.table(discounts)



const filtered=ProductsData.map((product)=>{
    return{
        ...product,
        price:product.price-(product.price*0.1).toFixed(2),
        date:new Date().toUTCString()
    }
}).filter((item)=>item.price>500)

console.table(filtered)

const getIndexOf=ProductsData.indexOf("ProdE");
console.log(getIndexOf)

console.log(ProductsData.slice(0,3).map((prod)=>{return{...prod,price:prod.price+10}}).filter(prod=>prod.price<500))

const mixedArray=[1,2,4,3,4,4,3,2,10,20,15,16];
const repeatative=mixedArray.filter((item,index)=>{
    return(
        mixedArray.indexOf(item) !== index
    )
})
console.log(repeatative)


let arr = ["apple", "mango",
    "apple", "orange", "mango", "mango"];

    let arr2=[1,2,4,2,3,5,2,2,1,2]
console.log(arr2.indexOf("orange"))
    const results=arr2.filter((item,index)=>{
      console.log(arr2.indexOf(item))
        return(
            arr2.indexOf(item)===index
        )

    })

    console.log(results)


    const arr3=[1,2,1,3,5,2,3,2,10,4,6];
    const unique=[]
    for(let i in arr3){
     if(!unique.includes(arr3[i])){
          unique.push(arr3[i])
      }
    }
    console.log(unique,"without built in")

    for(let i in arr3){
        if(arr3[i]>arr3[i+1]){
            temp=arr3[i]
        }
    }


    const numbersArr = [3, 10, 4, 21, 5, 9, 2, 6, 5, 3, 5];

// Ascending Order
numbersArr.sort((a, b) => a - b);
console.log(numbersArr); 

// Descending Order
numbersArr.sort((a, b) => b - a);
console.log(numbersArr); 


//without built in

arr = [5, 2, 7, 1, 0]

function bubbleSort(arr){
    for (let i = 0; i < arr.length - 1; i++){

        let swapped = false

        for (let j = 0; j < arr.length - i - 1; j++){
            // swapping the elements
            if (arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                swapped = true
            }
        }

       
        if(!swapped) break;
    }

    return arr
}

console.log("Before sorting: ", arr)
console.log("After sorting: ", bubbleSort(arr))