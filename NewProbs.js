//longest common prefix
const LCP=(strArr)=>{
    let prefix=strArr[0];
    for(let i=0;i<strArr.length;i++){
        console.log(prefix)
        while(strArr[i].indexOf(prefix)!==0){
             console.log(strArr[i])
            prefix=strArr[i].substring(0,prefix.length-1)
        }

    }
    return prefix
}

console.log(LCP(["apple","app","apse"]))

