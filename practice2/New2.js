// const getFrequency=(arr)=>{
//     return arr.reduce((acc,curr)=>{
//         acc[curr]=(acc[curr]||0)+1
//         // acc.push(elem)
//         return acc;
//     },{})
// }
// let frequencies=getFrequency([1,2,3,5,6,7,1,1,1,2,5,6,7,8])
// console.log(frequencies)
// console.log(Object.keys(frequencies).filter((key)=>{
//     return frequencies[key]===1
// }).map(elem=>parseInt(elem)))


// const getUnique=(arr)=>{
//     const uniqueArrs=[];
//     arr.forEach(element => {
//         if(!uniqueArrs.includes(element)){
//             uniqueArrs.push(element)
//         }

//     });
//     return uniqueArrs;
// }
// console.log(getUnique([1,2,3,5,6,7,1,1,1,2,5,6,7,8]))

const repeatativeFrequency=(arr)=>{
    return arr.reduce((acc,curr)=>{
        console.log(acc[curr],"freq")
       acc[curr]=(acc[curr]||0)+1
       return acc;
    },{})
}
console.log(repeatativeFrequency([1,2,3,4,5,6,7,8,8,8,8,1,1,1,2,2,3,4,4,5]))
const totalFrequencies=repeatativeFrequency([1,2,3,4,5,6,7,8,8,8,8,1,1,1,2,2,3,4,4,5])
console.log(Object.keys(totalFrequencies).filter((key)=>{
    return totalFrequencies[key]<=1
}).map((elem)=>parseInt(elem)))

const insertElement=(arr,n)=>{
      let zeroArr=[];
      arr.forEach((element,index)=>{
        zeroArr.push(element)
      if(index%n==n-1){
          zeroArr.push(0)
        }
      }
       
      );
      return zeroArr;
}

console.log(insertElement([1,2,3,4,5,6,7,8,9,10],3))