// Generic functions  ==> Functions handling multiple dataTypes (here array and string)
function swap(arr,index1,index2){
    let temp=arr[index1];
    arr[index1]=arr[index2];
    arr[index2]=temp;
}
const arr1=[1,2,3,4]
swap(arr1,0,3)
console.log(arr1)
const arr2=["abc","def","ghi"];
swap(arr2,0,2);
console.log(arr2)
