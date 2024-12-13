
// // // // const saySuccess=()=>{
// // // //     let a = 'TESTING'
// // // //    console.log("Success");
// // // //    return a;
// // // // }
// // // // let promise=new Promise((resolve,reject)=>{
// // // //     if(true){
// // // //          say
// // // //         resolve(saySuccess())
// // // //     }
// // // //     else{
// // // //         reject("It is rejected")
// // // //     }
// // // // })

// // // // promise.then((res)=>console.log(res))
// // // // // .then(()=>console.log("I am suucess")).catch((res)=>console.log(res))






// let display=true
// const getProducts=()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(display){
//            resolve([
//             {name:"Bag",price:1000,color:"red"},
//             {name:"Book",price:3000,color:"bluereed"},
//            ])
//             }
//             else{
//                 reject("unable to fetch products")
//             }
//         },1000)
//     })
// }
// function onFulfilled(users) {
//     console.log(users);
//   }
//   function onRejected(error) {
//     console.log(error);
//   }
  
//   const promise = getProducts();
//   promise.then(onFulfilled, onRejected);

//   getProducts().then(res=>console.log(res))






// Promise.all()
let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
       if(true){
        // console.log("I am from P1")
        resolve(10)
       }
       else{
        reject("no values")

       }
    },1*100)
});

let p2=new Promise((resolve,reject)=>{
     setTimeout(()=>{
        if(!true){
        // console.log("I am from P2")
       resolve(20)
        }
        else{
            // console.log("P2 no value")
            reject("I am P2 No value")
        }
     },2*10)
})

let p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(true){
            // console.log("I am from P3")
            resolve(30)
        }
        else{
            reject("I am P3 NO value")
        }
    },3*1000)
})

const PromiseAll=Promise.all([p1,p2,p3]).then(res=>console.log(res)).catch(er=>console.log(er))
console.log(PromiseAll,"all")

const PromiseRace=Promise.race([p1,p2,p3]).then((res)=>console.log(res)).catch((er)=>console.log(er))
console.log(PromiseRace,"race")

const PromiseAny=Promise.any(([p1,p2,p3])).then((res)=>console.log(res)).catch(er=>console.log(er))
 console.log(PromiseAny)

 const PromiseSettled=Promise.allSettled(([p1,p2,p3])).then((res)=>console.log(res)).catch(er=>console.log(er))
  console.log(PromiseSettled)











//PromiseAll => It waits for all promise to be get resolved and returns single promise with array of results , if any promise rejects it returns immediately with first rejected error
//PromiseRace => It returns promise immediately whichever resolves or rejects first
                //    or 
                // Waits for the first promise to settle and returns a promise that resolves or rejects with that value
