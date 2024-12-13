
//immutability of Object

"use strict"
const emp={
    name:"abc",
    age:12,
    area:"xyz"
 }
 console.log(emp)
 const frozenEmp=Object.freeze(emp);
//  emp['name']="jik"   not able to update
//delete emp['age']   // not able to delete
//  console.log(frozenEmp)  
  //  freeze --> only readble



//   Object.seal()
const newEmp={
    name:"jkl",
    age:23,
    city:"BGL"
}
const sealedEmp=Object.seal(newEmp);
// console.log(sealedEmp)
  newEmp['age']=34;   // we can update
// console.log(sealedEmp)
//delete newEmp["age"];  // cannot delete


// preventExtensions

const latestEmp={
    name:"juk",
    age:89,
    city:"kkl"
}
console.log(latestEmp)
const extendedEmp=Object.preventExtensions(latestEmp)
// delete extendedEmp['city']   // we can delete
delete extendedEmp['city']
latestEmp['scity']="olp"   // cannot create new property 
console.log(extendedEmp)


// Object.freeze()==> we can only read properties
// Object.seal() ==> we can update and read not delete properties
// Object.preventExtensions()=> we can't create new property but we can delete , add,update


