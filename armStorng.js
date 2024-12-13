const isArmStrong=(num)=>{
    let sum=0;
    let numOfDigits=num.toString().length;
    let temp=num;
    while(temp>0){
        let remainder=temp%10;
        sum+=Math.pow(remainder,numOfDigits)
        temp=Math.floor(temp/10)
        console.log(remainder)
    }
    if (sum===num) return "IT is an armstrong number"
    else return "Not an armstrong number"

}

console.log(isArmStrong(53))


const getSecondLargest=(arr)=>{
    let largest=-Infinity;
    let secondLargest=-Infinity;
    for(let i=0;i<=arr.length;i++)
{
    if(arr[i]>largest){
        secondLargest=largest;
        largest=arr[i]
    }
    else if(arr[i]>secondLargest && arr[i]!==largest){
        secondLargest=arr[i]
    }
}
return {secondLargest,largest}
}

console.log(getSecondLargest([1,2,4,3,5]))


var num=10;
const myFun=()=>{
    var num=20;
    num=50;
    console.log(num)
}
myFun()
console.log(num)


const arrays=[1,3,4,5,6,7]
for(let a in arrays){
    console.log(a)
}

const numAlpArr=["abc123","def456","ghi789"];
const getSummation=(arr)=>{
    arr.forEach((elem,i)=>{
        arr[i]= arr[i].split("").filter((elem=>!isNaN(elem))).reduce((a,b)=>parseInt(a)+parseInt(b),0);
       // console.log(arr)
        })
        console.log(arr)
}
console.log(getSummation(numAlpArr))

console.log("abc123".split("").filter(elem=>!isNaN(elem)).join(""))
// console.log(!isNaN("abc"))


const removeMinMax=(arr)=>{
  let min=Math.min(...arr)
  let max=Math.max(...arr)
  let filtered=arr.filter((elem)=>elem!==min && elem!==max)
  return filtered;
}
console.log(removeMinMax([1,2,3,5,6,7]))