const arr=["a","b","c","d","a","w","t","c","d","a"];
const getRepeatative=(arr)=>{
 let result={};
 arr.map((d)=>{
    result[d]=(result[d]||0)+1
 })
 return result;

}
console.log(getRepeatative(arr))

console.log(getRepeatative([1,2,3,4,1,1,1,3,5,6,3,4,4,3]))


const getMaxValue=(numArr)=>{
    return Math.max(...numArr)
}
console.log(getMaxValue([1,2,3,4,5,100]))

const getMaximum=(nums)=>{
    let maximum=nums[0];
    let minimum=nums[0];
    for(let i=1;i<nums.length;i++){
        if(nums[i]>maximum){

            maximum=nums[i]
        }
        else if(nums[i]<minimum){
            minimum=nums[i]
        }
    }
    return {minimum,maximum};
}
console.log(getMaximum([1,2,1,10,100,2000]))


const numArrs=["orange","mango","orange","apple","apple"]
const getRepeatativeStr=
   numArrs.filter((elem,index)=>{
      return(numArrs.indexOf(elem)!==index)
    })

console.log(getRepeatativeStr);

const removeDuplicates=numArrs.filter((elem,index)=>{
    return(numArrs.indexOf(elem)===index)
})
console.log(removeDuplicates)

let array=[1,2,3,[1,2,4],[1,4],5,6,8]
const flattenArray=(array)=>{
    return array.reduce((flat,toFlat)=>flat.concat(Array.isArray(toFlat)?flattenArray(toFlat):toFlat),[])
}

console.log(flattenArray(array),"flat")
const isAnagram=(str1,str2)=>{
    let first=str1.toLowerCase().split("").sort().join();
    let second=str2.toLowerCase().split("").sort().join();
    if(first===second){
        return "It is an anagram"
    }
    else{
      return  "Not an anagram"
    }
}

console.log(isAnagram("TAX","XATaajja"))
const getOccurence=(arr)=>{
    let occuranceMap={};
    arr.map((elem)=>{
        occuranceMap[elem]=(occuranceMap[elem]||0)+1
    })
    return occuranceMap;
}
console.log(getOccurence([1,2,4,5,4,3,2,2,1,1,1]))



const longestCommonPrefixnew=(strArr)=>{
      for(let i=0;i<strArr[0].length;i++ ){
        for(let j=1;j<strArr.length;j++){
            if(strArr[0][i]!==strArr[j][i]){
                console.log(strArr[0].slice(0,i))
                return strArr[0].slice(0,i)
            }
        }
      }
}

console.log(longestCommonPrefixnew(["flower","floew","flown"]))



const longPrefix=(strArr)=>{
    for(let i=0;i<strArr[0].length;i++){
        for(let j=1;j<strArr.length;j++){
            if(strArr[0][i]!==strArr[j][i]){
               return strArr[0].slice(0,i)
            }
        }
    }
}

console.log(longPrefix(["Flight","Flish","Flils"]),"New Long")