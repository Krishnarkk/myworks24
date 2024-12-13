const add = (a, b) => a + b;


const multiply = (a, b) => {
  setTimeout(() => {
     console.log("multiply",a*b);
  }, 2000);
};

const divide = (a, b) => {
 setTimeout(()=>{
    console.log("Division Function")
 },1000)
    return a / b;
};

const myPromise=new Promise((res,rej)=>{
    res("I am resolved")
})
myPromise.then((res)=>console.log(res))


console.log("add",add(10, 20));
multiply(2, 3);
console.log("division",divide(10, 2));



// jS ==> FIFO