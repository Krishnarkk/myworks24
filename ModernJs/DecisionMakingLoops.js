// if , if else , else if
// if( expressions )  expressions ==> comparision a>10, assignment a=10

//switch

switch ((a = 10)) {
  case 10:
    console.log(a);
    break;

  default:
    break;
}

//  break needed if not it prints all case values  else also so break needed.

//loops

// for , for in , for of , foreach ,  while , do while

//   for(let i=0 ; i<Array.length;i++){

//   }

//   for(let i=20; ; ){
//      valid
//   }

//    for(; ;){
// valid and  default is  true
//    }

// while (true){
//      valid
// }

// for vs while ==> while needs condition check , for is having by default it is true

// for in Objects and for of arrays

// for in      // index or keys only   keys are always string
let obj = {
  fName: "ABC",
  lName: "DEF",
};
for (let i in obj) {
  console.log("for in ", i, obj[i]);
}

//for of    ==> for of is based on Values
let arr = [1, 2, 3, 4, 5];
for (let num of arr) {
  console.log(num);
}

// do while
do {
  console.log(true);
} while (false);
// forEach will change the main array
arr.forEach((elm, i) => {
  console.log(elm, i);
});

function add(a, b) {
  return a + b;
}
console.log(add(3, 4));

function sayHi() {
  console.log("hi");
}
console.log(sayHi()); // undefined as it is return

// Returning Functions
function add() {
  return 10;
}
add();
// Parameterized Functions
function add(a, b) {
  return a + b;
}
add(10, 3);

// default function parameters
function add(c, a = 10, b = 12) {
  return a + b + c;
}
add(1);

// anonymous function
() => console.log("a");
(function (a, b) {
  console.log(a + b);
})(3, 4); //Immediately invoking function expression.

// rest parameterized function
function restParameterizedFunction(...a) {
  console.log(typeof a);
}
restParameterizedFunction(1, 2, 3, 4, 6);
// recursive function
function recursive(num) {
  if (num <= 0) return 1;
  return num * recursive(num - 1);
}

console.log(recursive(5));
// lambda function
((a, b) => console.log(a * b))(2, 4);

// callback function
   function interaction(sendSMS , sendEMAIL){
          sendEMAIL();  //callback for email
          sendSMS();    // callback for sms
   }  // body of parent function
   interaction(
    ()=>console.log("SMS sending"),   // definition of function callback
    ()=>console.log("EMAIL sending"),
   )

//    function passed as parameter to another function   (defining in execution of another function ,  function while calling parent function opposite of normal function)



   const arr3=[1,2,9,8,3,4];
   console.log(arr3.sort())
   console.log(arr3)

   
//    const arr4=[1,2,9,8,3,4];
//    console.log(arr4.toSorted())
//    console.log(arr4)

   

// functional hoisting
//  $ function can be called before defining function
console.log(funcHoisting());
function funcHoisting() {
  console.log("functional hoisting");
  return 10;
}

// find
//   is function parameters  add(a,b) here is a b are variables??? are variables and how memory is allocated in execution
// what is the use of anonymous function.
// create same function for both add and multiplication , one function acts like both

const allProblem=(a,b,operators)=>{
    if(operators==="add"
    )
    ret
}