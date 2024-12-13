const numbersArr=[1,2,3,5,6,6,7,7,8];
const duplicates=numbersArr.filter((elem,index)=>{
    return numbersArr.indexOf(elem)!==index
})

console.log(duplicates)


const getUnique=(arr)=>{
    const uniqueElements=[];
    for(let i of arr){
        if(uniqueElements.indexOf(i)===-1){
            uniqueElements.push(i)
        }
    }
    return uniqueElements
}

console.log(getUnique([1,2,3,4,4,5,5,6,6,7]))

// const getDuplicates=(arr)=>{
//     let duplicatesArr=[];
//     for(let i of arr){
//         console.log(duplicatesArr.indexOf(i)===-1,"=====")
//         !duplicatesArr.indexOf(i)?duplicatesArr.push[i]:[]
//     }
//     return duplicatesArr;
// }

// console.log(getDuplicates([1,2,2,2,3,3,3]))


const getUniques=(Arr)=>{
   return Arr.filter((item,index)=>{
      console.log(item,"==>",Arr.indexOf(item),index,"indexes")
        return Arr.indexOf(item)===index
    })
}
console.log(getUniques([1,2,3,3,3,4,4,5]))

const getDuplicatesVal=(Arrss)=>{
   return Arrss.filter((elem,index)=>{
        return Arrss.indexOf(elem)!==index
    })
}

console.log(getDuplicatesVal([1,2,3,3,4,5,6,6,6,7]))



// program to remove duplicate value from an array

function getUnique67(arr){


    let uniqueArrs=([...new Set(arr)])

    console.log(uniqueArrs,"set");
}

const array = [1, 2, 3, 2, 3];

// calling the function
getUnique67(array);

const numArrs=["abc123","def234","ghi567","jkl789"]

 const getSum=(numArrs)=>{
   return numArrs.map(element => {
       return element=element.split("").filter((item=>!isNaN(item))).reduce((a,b)=>parseInt(a)+parseInt(b),0)
    });
 }

 console.log(getSum(numArrs))



 //longest common prefix

 const longestPrefix=(arrs)=>{
    let prefix=arrs[0];
    for(let i=1;i<arrs.length;i++){
        while(arrs[i].indexOf(prefix)!==0){
            prefix=arrs[i].substring(0,prefix.length-1)
        }
    }
    return prefix
 }
 console.log(longestPrefix(["flower","flown","flowk","flowing"]))


 const reOrder=(arr,ind)=>{
    return ind.map(index=>arr[index])
 }

 console.log(reOrder(["HTML","CSS","JS"],[2,0,1]))

 const getOccurance=(arrs)=>{
    let occuranceMap={}
      arrs.map((elem)=>{
        occuranceMap[elem]=(occuranceMap[elem]||0)+1
      })
      return occuranceMap;
 }

 console.log(getOccurance([1,2,3,1,2,3,4,5,4,45,7]))

 const lcf=(strArr)=>{
    let prefix=strArr[0];
    for(let i=1;i<strArr.length;i++){
        while(strArr[i].indexOf(prefix)!==0){
         prefix=strArr[i].substring(0,prefix.length-1)
        }
    }
    return prefix
 }

 console.log(lcf(["apple","ape","a"]))

 const occurence=(arrs)=>{
    let count={};
    for(let i=0;i<arrs.length;i++){
        let num=arrs[i]
      count[num]=count[num]?count[num]+1:1
       }
       return count;
 }

 console.log(occurence(["apple","apple","mangoes","orange","banana","banana","apple"]))



 const occurenceMapping=(Arr)=>{
    let count={};
  for(let i=0;i<=Arr.length;i++){
      let num=Arr[0];
  count[num]=count[num]?count[num]+1:1
      
  }
  return count;
  }