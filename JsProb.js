const createObj=(a,b)=>{
        // return Object.assign(...a.map((elem,index)=>({elem:b[index]})))
        return Object.assign(...a.map((k, i) =>({ 
            [k]: b[i] })))
}
console.log(createObj([1,2,3,4],["car","flight","book","ship"]))

const arr=[0,0,0,0];
// const getLargest=(arr)=>{
//     // console.log(sort((a,b)=>b-a))
//     let maxVal;
// return (
//     maxVal=Math.max(arr.sort((a,b)=>b-a))
// )
// }
// console.log(getLargest(arr))


const largest=(arr)=>{
    let strArr=arr.map(String)
    const compare=(x,y)=>{
        if(x+y > y+x){
            return false
        }
        else{
            return true
        }
    }
    strArr.sort(compare)
    console.log(strArr)
    let result="";
    for(let num of strArr){
        result+=num
    }
    if(result.split('')[0]==='0'){
        return "0"
    }
    console.log(strArr,result)
    return result
}
console.log(largest(arr))