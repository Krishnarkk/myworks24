// const getUnique=(arr)=>{
//     let uniqueValues=[];
//     let repeatative=[];
//     let finalArr=[];
//     arr.forEach(element => {
//         if(!uniqueValues.includes(element)){
//             uniqueValues.push(element)
//         }
//         else {
//            repeatative.push(element)
//         }


        
//     });

//      uniqueValues.forEach(element=>{
//          console.log(element,"uniquess")
//          if(repeatative.includes(element)){
//             console.log(element,"if")
//          }
//          else{
//             console.log("elese",element)
//             finalArr.push(element)
//          }
//      })
   
//     return {uniqueValues,repeatative,finalArr};
// }
// console.log(getUnique([1,1,2,3,4,5,6,6,7]))



const addingZeroes=(arr,n)=>{
    const finalArr=[];
    arr.forEach((element,index)=>{
        finalArr.push(element)
        console.log(index,n , index%n,"reminder")
       if(index%n==n-1){ 
        console.log(index)
           finalArr.push(0
           )
       }
    })
    return finalArr;
}


// console.log(addingZeroes([1,2,3,4,5,6,7,8,9,10],3))



// const additionsZero=(arr,n)=>{
//   for(let i=n;i<=arr.length;i+=n+1){
//     arr.splice(i,0,0)
//   }
//   return arr
// }
// console.log(additionsZero([1,5,7,8,4,10,11,6],1))

// const additionsZeroAtEven=(arr)=>{
//     for(let i=0;i<=arr.length;i++){
//       if(arr[i]%2===0 ){
//           arr.splice(i+1,0,0);
//           i++
//       }
//     }
//     return arr
//   }
//   console.log(additionsZeroAtEven([1,5,7,8,4,10,11,6,19]))


//   const replaceEven=(arr)=>{
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2===0){
//             arr[i]=0
//         }
//     }
//     return arr
//   }
//   console.log(replaceEven([1,2,3,4,5,6,8,20,22]))


  const getFrequency=(arr)=>{
    let count={};
     arr.forEach(element=>{
        count[element]=count[element]?count[element]+1:1
     })
     return count;

  }
  console.log(getFrequency([1,3,3,3,3,4,5,6,7,8,9]))

  const frequencies=(arr)=>{
    let counts={};
    for(let i=0;i<arr.length;i++){
       counts[arr[i]]=counts[arr[i]]?counts[arr[i]]+1:1
    }
    return counts;
  }

  console.log(frequencies([1,1,1,1,2,4,4,4,4,8,9,5,6,7]))

  