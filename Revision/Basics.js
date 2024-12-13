// let obj1={id:23,name:"Kiran",age:24,city:"Bangalore",det:{dist:"vijaypur",state:"karnataka",hobbies:{game1:"cricket",game2:"football"}}}
// // const {name,age,city,det:{dist,state,hobbies:{game1,game2}}}=obj1;



// let {det:{hobbies:{game1,game2}}}=obj1
// //.log(game1,game2)

// let emp={id:1,position:"Software",city:"Bangalore","age":23,name:"Kishore"}
// //.log(typeof emp)

// let {id,...rest}=emp;
// //.log(id)
// //.log(rest)
// let {city}=rest
// //.log(city)

// //.log(emp.id, emp.position)

// const combined={...obj1,...emp}
// //.log(combined)

// let obj2={
//     name:"HTML",
//      exp:3
// }

// var obj3=Object()
// var obj4=Object.create({city:'chennai',dist:"bangalore"})
// //.log(obj4)


// // let empInfo={
// //     name:"Kishan",
// //     age:23,
// //     city:"BNG"
// // }

// // let jobInfo={
// //     role:"developer",
// //     company:"Nokia"
// // }

// // let details=Object.create(empInfo,jobInfo)
// // //.log(details)


// var object = Object.create(null);
// let vehicle = {
//     wheels: '4',
//     fuelType: 'Gasoline',
//     color: 'Green'
//   }
//   let carProps = {
//     type: {
//       value: 'Volkswagen'
//     },
//     model: {
//       value: 'Golf'
//     }
//   }
  
//   var car = Object.create({vehicle, carProps});
//   //.log(car);

//   const 


const obj1=new Object();
obj1.name="Kiran";
obj1.age=12;
obj1.city="chennai"
//.log(obj1)

const obj2={name:"Kiran",age:22,job:"IT"}
//.log(obj2)

//.log(Object.assign(obj1,obj2))

let obj3=Object.create(null)
obj3.name="Kiran"
obj3.age=12
console.log(obj3,"object 3")

let obj4=Object.assign({},{name:"kumar",ofc:"mirafra"})
// //.log(obj4)
// //.log(typeof obj4)
// //.log(Object.assign(obj1,obj2),"assig")
// //.log({...obj1,...obj2,...obj3,...obj4})


//shallow copy   --> the are change reflects in main parent object also but that is wrong
 
let info={company:"Mirafra",tech:"React",city:"Bangalore",location:{area:"abc"}}
// let spreadCopy={...info}
// let assignCopy=Object.assign(info)

// console.log(info,spreadCopy,assignCopy)


//deep copy ---> it will not updates older object
// let shallow={...info};
// shallow.location.area="xyz";
// console.log(shallow ,"copied")
// console.log(info , "original")



let deepCopy=JSON.parse(JSON.stringify(info))
deepCopy.location.area="def";


console.log(deepCopy,"copied")
console.log(info,"original")

//loops

let person={
    name:"abc",
    age:23,
    city:"Bangalore",
    state:"Karanataka",
    // det:{
    //     area:'klm',
    //     color:"white"
    // }
}
// const shalCopy={...person}
// shalCopy.det.area="opo"
// console.log(shalCopy,"-=-=-=-=> copied")
// console.log(person,"=>=>=>-->>>> original")

// const clonedObj=JSON.parse(JSON.stringify(person))
// console.log(clonedObj)

// clonedObj.det.area="pqr";

// console.log(person, "-------------------------original")
// console.log(clonedObj, "---------------------cloned object")

const entries=Object.entries(person)

for([key,value] of entries ){
   console.log(key,value)
}

for(property in person){
    console.log(`${property}:${person[property]}`)
}


const orgObject = { company: 'XYZ Corp'};
const carObject = { name: 'Toyota'};
const staff = Object.assign( {},orgObject, carObject);

console.log(staff,"carOrgObject")


//call , apply and bind

//call invokes function with given this value and pass the arguments as comma seperated

let person1={firstName:"john",lastName:"abc"}
let person2={firstName:"xyz",lastName:"def"}
function greet(city,job){
     console.log(`you are in  ${city}, you are ${job}...and ${this.firstName}, ${this.lastName} `)
}

greet.call(person1,"bangalore","developer")
greet.apply(person2,["mysore","tester"])

let person1Greet=greet.bind(person1)
person1Greet("hyderabad","testing developement ")


//call ==> invokes a function with given this value and arguments are provided comma seperated
//apply ==> invokes a function with givem this value and the arguments are provided as an array
//bind ==> It returns new function and allows passing any number of arguments

//promise

const getDetails=()=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
          if(true){
            resolve("I am resolved")
          }
          else{
            reject("nott")
          }
    },1000)
  })
}

getDetails().then((res)=>console.log(res)).catch((er)=>console.log(er))


const getEmpDetails=(ids)=>{
    return new Promise((resolve,reject)=>{
        let empDetailing=[
            {id:1,name:"xyz",age:23},
            {id:2,name:"xyz",age:23},
            {id:1,name:"xyz",age:13},
        ]
        let foundUser=empDetailing.find((emp)=>emp.id===ids)
    
        setTimeout(()=>{
            if(foundUser){
                resolve(foundUser)
            }
            else{
                reject("id did not match")
            }
        },1000)
    })
}

getEmpDetails(1).then((res)=>console.log(res)).catch(er=>console.log(er))


const num=[1,2,3,4,5]
console.log(num.slice(2,-1))

const newArr=[{name:'abc',age:10,ofc:"def"},2,3,4,5]
console.log(newArr.slice)


