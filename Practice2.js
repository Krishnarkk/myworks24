const getUnique=(arr)=>{
   return arr.filter((elem)=>{
    return arr.indexOf(elem)!==-1
   })
}
console.log(getUnique([1,2,1,2,3,4]))

const getOccuranceMap=(arrs)=>{
    const count={}
    for(let i=0;i<arrs.length;i++){
        let num=arrs[i];
        count[num]=count[num]?count[num]+1:1
    }
    return count;
}

const getOccurenceMapping=(arrs)=>{
   return arrs.map((elem)=>{
    let cout={}
        return (cout=arrs[elem]||0)+1
    })
}
console.log(getOccuranceMap([1,1,2,2,4,5,3,6,3,1,1,1,14,3,4,5,6]))
console.log(getOccurenceMapping([1,1,2,2,4,5,3,6,3,1,1,1,14,3,4,5,6]))