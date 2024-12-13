
// const getNumbers=(arr)=>{
//     const uniqueElements=[];
//     const repeatativeElements=[];
//     arr.forEach(element => {
//       if(!uniqueElements.includes(element)){
//         uniqueElements.push(element)
//       }
//       else{
//         repeatativeElements.push(element)
//       }
//    });
//    return {uniqueElements,repeatativeElements}
// }

// // console.log(getNumbers([1,2,1,1,2,4,5,7,8,9,0,21,3,6]))










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
// // console.log(getUnique([1,2,1,1,2,4,5,7,8,9,0,21,3,6]))


// //using reduce method
// const uniques=(arr)=>{
//     return arr.reduce((acc,curr)=>{
//         if(!acc.includes(curr)){
//             acc.push(curr)
//         }
//         return acc;
//     },[])
// }

// // console.log(uniques([1,2,3,1,2,4]))

// //moving zero to end

// const shiftingZero=(arr)=>{
//     let result=[];
//     let zeroCount=0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]!==0){
//             result.push(arr[i])
//         }
//         else{
//             zeroCount++
//         }
//     }

//     while(zeroCount>0){
//         result.push(0);
//         zeroCount--;
//     }
//     return {result,zeroCount}
// }

// console.log(shiftingZero([1,2,3,0,4,0,5,60,9,16,0]))

// const addZeros=(arr,n)=>{
//     let result=[];
//     for(let i=0;i<arr.length;i++){
//          result.push(arr[i])
//          console.log(i,n,i%n)
//         if((i%n)==n-1){
//             result.push(0)
//         }
//     }
//     return result
// }

// console.log(addZeros([1,2,3,4,5,6,7,8,9,10],3))



// const addZerosEven=(arr)=>{
//     let result=[];
//     for(let i=0;i<arr.length;i++){
//          result.push(arr[i])
//         if(arr[i]%2===0){
//             result.push(0)
//         }
//     }
//     return result
// }

// console.log(addZerosEven([1,2,3,4,5,6,7,8,9,10],3))

// const sumOfDigits=(arr)=>{
//    return arr.map((element)=>{
//     console.log(element.split("").filter((elem=>!isNaN(elem))))
//    return element.split("").filter((elem=>!isNaN(elem))).reduce((a,b)=>parseInt(a)+parseInt(b),0);
// })   
// }

// console.log(sumOfDigits(["abc123","def456","ghi789"]))

// const getFrequency=(arr)=>{
//   return arr.reduce((frequency,element)=>{
//     frequency[element]=(frequency[element]||0)+1
//     return frequency;
//   },{})
// }
// console.log(getFrequency([1,2,2,3,5,6,1,1,4,7,8,9]))



// const findPeakElement=(arr)=>{
//     let n=arr.length;
//     if(n===0) return -1;
//     if(n===1) return 0;
//     if(arr[0]>arr[1]) return 0;
//     if(arr[n-1]>arr[n-2]) return n-1;

//     for(let i=1;i<n-1;i++){
//         if(arr[i]>=arr[i-1]&&arr[i]>=arr[i+1]){
//             return i;
//         }
//     }
//     return -1
// }
// let arr=[1,3,20,4,1,0]
// let peakIndex=findPeakElement(arr)
// console.log(arr[peakIndex])


//  const lCP=(strArr)=>{
//      return strArr.reduce((prefix,curr)=>{
//        while(!curr.startsWith(prefix)){
//          prefix=prefix.slice(0,-1)
//        }
//        return prefix;
//     },strArr[0])
//  }

//  console.log(lCP(["flower","flown","flew"]))


//  const longestPrefix=(strArr)=>{
//     return strArr.reduce((prefix,curr)=>{
//         while(!curr.startsWith(prefix)){
//             prefix=prefix.slice(0,-1)
//         }
//         return prefix
//     },strArr[0])
//  }

//  console.log(longestPrefix(["flowe","flown","flew","fl"]))


//  const getPeakestElement=(numArr)=>{
//     const n=numArr.length;
//     if(n===0) return -1;
//     if(n===1) return 0;
//     if(numArr[0]>numArr[1]) return 1;
//     if(numArr[n-1]>numArr[n-2]) return n-1;
//     for(let i=1;i<n-1;i++){
//         if(numArr[i]>=numArr[i-1] && numArr[i]>=numArr[i+1]){
//             return i;
//         }
//     }
//     return -1
//  }
// //  console.log(getPeakestElement([1,3,20,4,1,0]))
//  let arrs=[1,3,20,4,1,0]
// let peakIndesx=getPeakestElement(arr)
// console.log(arrs[peakIndesx])



// const getLCP=(strArr)=>{
//     return strArr.reduce((prefix,curr)=>{
//         while(!curr.startsWith(prefix)){
//             prefix=prefix.slice(0,-1)
//         }
//         return prefix;
//     },strArr[0])
// }

// console.log("latest",getLCP(["flower","flew","flown","fly"]))


// const gettingFrequency=(numArrs)=>{
//     // let count={};
//     // numArrs.forEach((elem)=>{
//     //   count[elem]=count[elem]?count[elem]+1:1
//     // })
//     // return count;

// //    return numArrs.reduce((freq,elem)=>{
// //      freq[elem]=(freq[elem]||0)+1  
// //      return freq 
// //     },{})



//    return numArrs.reduce((freq,curr)=>{
//     freq[curr]=(freq[curr]||0)+1;
//     return freq;
//    },{})
// }
// console.log(gettingFrequency([1,2,2,2,1,4,5,6,7,8]))

// const getRepeatative=(maps)=>{
//     // let repeatingFrequency=Object.values(maps).filter((elem)=>elem>1);
//     // return Object.keys(maps).filter(key=>repeatingFrequency[key]>1)
//     console.log(Object.keys(maps) , Object.values(maps))
//     let repeatedFrequencyValue= Object.values(maps).filter(elem=>elem>1);
//     repeatedFrequencyValue.map((elem)=>{
//       return  maps[elem]
//     })
// }
// console.log(getRepeatative(gettingFrequency([1,2,2,2,1,4,5,6,7,8])))











// const frequencies=(numArrs)=>{
//     return numArrs.reduce((freq,elem)=>{
//         freq[elem]=(freq[elem]||0)+1
//         return freq;
//     },{})
// }
// console.log("mylatest",frequencies([1,2,3,1,3,5,6,7,8,1,5,7,8]))

// let frequency=frequencies([1,2,3,1,3,5,6,7,8,1,5,7,8])
// const duplicate=Object.keys(frequency).filter(key=>frequency[key]>1)
// const unique=Object.keys(frequency).filter(key=>frequency[key]==1)
// console.log(duplicate)
// console.log(unique)


// const LCPS=(numArrs)=>{
//     return numArrs.reduce((prefix,cuur)=>{
//         while(!cuur.startsWith(prefix)){
//             prefix=prefix.slice(0,-1)
//         }
//         return prefix;
//     },numArrs[0])
// }

// console.log(LCPS(["shine","show","shrink"]))


// const getUniquess=(arr)=>{
//     const unique=[];
//     const repeatative=[];
//     for(let i=0;i<arr.length;i++){
//        if(arr.indexOf(arr[i])===arr.lastIndexOf(arr[i])){
//         unique.push(arr[i])
//        }
//        else{
//         repeatative.push(arr[i])
//        }
//     }
//     return {unique,repeatative}
// }

// console.log(getUniquess([1,1,2,2,3,4,5]))



// const getUniqueObjects=(obj)=>{
//     return obj.reduce((acc,currObj,arr)=>{
//         if(!acc.find((elementalObj=>
            
//             (elementalObj.articleId===currObj.articleId)||
//             (elementalObj.occupation===currObj.occupation)))){
//             acc.push(currObj)
//         }
//         return acc;
//     },[])
// }

// let arrObj = [
//     { articleId: 101, title: "Introduction to JavaScript",occupation:"teacher" },
//     { articleId: 102, title: "Arrays in JavaScript",occupation:"principle" },
//     { articleId: 101, title: "Introduction to JavaScript",occupation:"teacher" },
//     { articleId: 103, title: "Functions in JavaScript",occupation:"principle" },
// ];

// console.log(getUniqueObjects(arrObj))

// const getUniqueNames=(objArr)=>{
//     return objArr.reduce((acc,curObj)=>{
//         let nameValue=curObj.name;
//         if(!acc.includes(nameValue)){
//             acc.push(nameValue)
//         }
//         return acc;
//     },[])
// }
// console.log(getUniqueNames(arrObj),"uniqueNames")



// function flat(arr) {
//      console.log(arr)
//     let isFlat=false;
//     while(!isFlat){
//         isFlat=true;
//         let temp=[];
//     for (let i = 0; i < arr.length; i++) {
//       if (Array.isArray(arr[i])) {
//         isFlat=false
//         let val = arr[i]
//         for (let j = 0; j < arr[i].length; j++) {
//             temp.push(val[j])
//         }
//       } else {
//         temp.push(arr[i]);
//       }
//     }
//     arr=temp
// }
//     return arr
//   }
//   console.log(flat([1,2,3,4,6,[1,2,3],[2,[3,4]]]));

//   console.log([1,2,3,4,6,[1,2,3],[2,[3,4]]].flat(Infinity))


// console.log([1,2,3,4,6,[1,2,3],[2,[3,[5,6],4]]].toString().split(",").map(Number))

// console.log([1,2,3,[4,[5,[6,[7]]],8,9,[10,11,13]]].toString().split(",").map(Number))

// const flats=(arr)=>{
//     let result=[];
//     let tempArray=[...arr];
//     while(tempArray.length){
//         let firstElement=tempArray.shift()
//         if(Array.isArray(firstElement)){
//             tempArray=[...firstElement,...arr]
//         }
//         else{
//             result.push(firstElement)
//         }
//     }
//     return result
// }
// console.log(flats([1,2,[3,4]]))


const flats=(arr)=>{
  let result=[];
  let currentArr=[...arr];
  while(currentArr.length>0){
    let item=currentArr.shift()
    console.log(item,"itemArr")
    if(Array.isArray(item)){
      console.log(item,"single item")
      console.log(currentArr,"current")
      currentArr=[...item,...currentArr]
    }
    else{
      result.push(item)
    }
  }
  return result;
}


console.log(flats([1,2,3,4,[5,[1,2],6],7,8,[9,10]]))