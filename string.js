const hammingDistance=(x,y)=>{
    x=x.toString(2);
    y=y.toString(2);
    if(x.length<y.length){
        while(x.length!==y.length) x="0"+x
    }
    else{
        while(x.length!==y.length) y="0"+y 
    }
    let distance=0;
    for(let i=0;i<x.length;i++){
        if(x[i]!==y[i]){
            distance+=1
        }
    }
    return distance;
}
console.log(hammingDistance(1,6)) //3

//remove duplicates
const removeDuplicates=(str)=>{
    return str.split("").filter((char,index,self)=>self.indexOf(char)===index).join("")
}
console.log(removeDuplicates("hello"))


function longestCommonPrefix(strs) {
    if (!strs.length) return '';

    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (!prefix) return '';
        }
    }

    return prefix;
}




function isStringIsomorphic(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    for (let i = 0; i < str1.length; i++) {
        for (let j = i + 1; j < str1.length; j++) {
            if (
                (str1[i] === str1[j] && 
                str2[i] !== str2[j]) ||
                (str1[i] !== str1[j] && 
                str2[i] === str2[j])
            ) {
                return false;
            }
        }
    }
    return true;
}

let str1 = "ABCA";
let str2 = "XYZX";
console.log(isStringIsomorphic(str1,str2));




function checkPangram(str) {
    let strLowerCase = str.toLowerCase();
     let albhabet="abcdefghijklmnopqrstuvwxyz";
     let Panagram=false;
     for(let char of albhabet){
        if(!strLowerCase.includes(char)){

            return "It is not panagram"
        }
        else{
            return "It is a Panagram"
        }
     }
}



function isPanagram(str) {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const lowerStr = str.toLowerCase();

    return letters.split('').every(char => lowerStr.includes(char));
}

let str1z = "The quick brown fox jumps over the lazy dog";
let str2z = "Hello, World!";

console.log(isPanagram(str1z)?"Panagram":"Not a Panagram")


const firstRepeatativeCharacter=(str)=>{
    let result={};
    for(let i=0;i<str.length;i++){
        if(!result[str[i]]){
            result[str[i]]=1
        }
        else{
            result[str[i]]++
        }
    }
    for(let i=0;i<str.length;i++){
        if(result[str[i]]===1){
            return str[i];
        }
    }
    return null;
}
console.log(firstRepeatativeCharacter("hellp"))

const seperatingString=(str,input)=>{
    let newStr=str.split("/");

    if(parseInt(input)>newStr.length) return "Not a valid input"
    return newStr[parseInt(input)-1]
}

console.log(seperatingString("mydata/location/banglore/ecity",4));
