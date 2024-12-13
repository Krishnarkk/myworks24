let companyName = "Mirafra"; //string
let num = 23; // number
let isChecked = true; // boolean
const details = {
  fname: "Mirafra",
  lname: "Technologies",
  city: "Bangalore",
}; // object


console.log(`
    the name is ${companyName},
    number is ${num},
    boolean is ${isChecked},
    object is ${details.fname}, ${details.lname}, ${details.city}
    `);

//function to check even or odd
checkNum = (num) =>
  num % 2 === 0
    ? `The input number ${num} is even`
    : `The input number ${num} is odd`;

console.log(checkNum(3));

const printNums = (n) => {
  for (let i = 1; i <= n; i++) {
    if (i % 5 != 0) {
      console.log(i);
    }
  }
};
printNums(50);

const getProduct = (a, b) => a * b;
console.log(`the product of numbers is ${getProduct(8, 9)}`);

const getLength = (str) => str.length;
console.log(getLength("htmlcssjs"));

const getDivision = (num1, num2) => num1 / num2;
console.log(getDivision(10, 2));

const getVariables = () => {
  let fName = "Mirafra";
  const lName = "Technologies";
  console.log(fName);
  console.log(lName);
};
// console.log(lName)  // not accessible
// console.log(fName)   // not accesible

getVariables();

const empDetails = {
  fName: "ABC",
  age: 25,
};

console.log(
  `the employee details Name is ${empDetails.fName} and age is ${empDetails.age}`
);

const person = {
  name: "Alice",
  city: "London",
};
const { name, city } = person;
console.log(name, city);

const handleMultiplication = (...nums) => {
  let product = 1;
  for (let i of nums) {
    product *= i;
  }
  return product;
};
console.log(handleMultiplication(1, 2, 3, 4, 5));
console.log(handleMultiplication(1, 2, 3, 4));

const obj={a: 1, b: 2} 
const clonnedObj={...obj}
console.log(clonnedObj)


class Person{
      constructor(fName,lName){
        this.fName=fName;
        this.lName=lName
      }
      getName(){
        return `${this.fName} , ${this.lName}`
      }
}

const person1=new Person("Sunil","K")
const person2=new Person("Suresh","A")
console.log(person1.getName())
console.log(person2.getName())


class Vehicle{
    move(){
        console.log("The vehicle is moving")
    }
}

class Car extends Vehicle{
    honk(){
      console.log("The car honks")
    }
}

const CarA=new Car();
CarA.move();
CarA.honk();


class Persons{
    static info(){
        console.log("This is person class")
    }
}

Persons.info()


class Dog{
    constructor(breed,age){
        this.breed=breed;
        this.age=age;
    }
    bark(){
        console.log("Woof!")
    }
}

const dogA=new Dog("abc",10);
const dogB=new Dog("def",20)
dogA.bark();
dogB.bark();