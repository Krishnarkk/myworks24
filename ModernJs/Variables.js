a = 10; //initialization
var a; // declaration
var a = 10; // definition

// datatypes     Primitive             NonPrimitive
//   Number,                            Array
//   string,                            Object
//   null,
// undefined,
// Boolean

//Scope of variables
// global Scope
function add() {
  console.log(a);
}
add();
// local Scope   or function scope
function sub() {
  var e = 30;
  console.log(e);
}
console.log(e);
// Block scope

{
  var g = 20;
  let h = 23;
  const k = 25;
}
// console.log(g);     global scope
// console.log(h);     block scope     we can add var but let and const are std block scope
// console.log(k);     block scope

// let vs const ==> const has to be initialized during  declaration  at same time . not let;
// let value can be changed , const we can't
// let and const behave block only defined under block , or else global
let check = "hello"; // global also
function say() {
  console.log(check);
}
say();
console.log(check);


// hoisting
// moving function and variable declaration to top of it's scope  then it is initialization
//   only declaration considered

// console.log(hoist);   undefined
// var hoist;
// hoist="some text"


// console.log(hoist) not defined


//    console.log(hoist);  not defined
//     hoist="normal text" 