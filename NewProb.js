const removeDuplicates=(arr)=>{
    const unique=[];
    arr.forEach(element => {
        if(!unique.includes(element)){
            unique.push(element)
        }
    });
    return unique;
}
console.log(removeDuplicates([1,1,2,3,3,5,6,7,8]))

const getRepeatative=(arr)=>{
    const repeatative=[];
    arr.forEach((elem,index)=>{
        if(arr.indexOf(elem)!==index && !repeatative.includes(elem)){
            repeatative.push(elem)
        }
    })
    return repeatative;
}

console.log(getRepeatative([1,2,3,4,5,6,7,7,8,9,9]))

const Lcp=(str)=>{
    return str.reduce((prefix,current)=>{
        while(!current.startsWith(prefix)){
            prefix=prefix.slice(0,-1)
        }
        return prefix;
    },str[0])
}

console.log(Lcp(["flow","flown","flight"]))



const newLCP=(strArr)=>{
    
    let prefix=strArr[0];
    for(let i=0;i<=prefix.length;i++){
        let res=strArr.every(i=>i.startsWith(prefix))
        console.log(res)
        if(!res){
           prefix= prefix.slice(0,-1)
           console.log(prefix);
        }
        else{
            prefix
        }
    }
   return prefix
}

console.log(newLCP(["flower","flows","flying"]))
