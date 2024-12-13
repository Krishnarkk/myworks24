const getFrequency=(arr)=>{
    let freq={};
    let repeatative=[];
    let unique=[];
    let noDuplicates=[];
    for(let elm of arr){
        if(freq[elm]){
            freq[elm]+=1
        }
        else{
            freq[elm]=1
            noDuplicates.push(Number(elm))
        }
        
    }
    for(let elm in freq){
        if(freq[elm]===1){
            unique.push(Number(elm))
        }
        else if(freq[elm]>=2){
            repeatative.push(Number(elm))
        }
        
    }
    return {freq,unique,repeatative,noDuplicates}
}

console.log(getFrequency([1,2,3,4,1,3,4,4,4,4,4,4,4,4,4,4]))