const arr=[1,2,6,7,8];
// console.log(arr.splice(2,0,3,4,5))
// console.log(arr)

console.log(arr.splice(1,3))
console.log(arr)
const additionsZero=(arr,n)=>{
  for(let i=n;i<=arr.length;i+=n+1){
    arr.splice(i,0,0)
  }
  return arr
}
// console.log(additionsZero([1,5,7,8,4,10,11,6,12],3))


const numArr=[1,2,3,4,5]
const result=numArr.map(elem=>elem*2)
console.log(result)


const fruits = ["Banana", "Orange", "Apple", "Mango"];

// At position 2, remove 2 elements
fruits.splice(2,1);
console.log(fruits)