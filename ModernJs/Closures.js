function createCounter() {
  let counter = 0;
  return function () {
    return counter++;
  };
}

const count = createCounter();
console.log(count());
console.log(count());
console.log(count());
console.log(count());

//closures helps in data encapsulation hiding variable and returning state

//this keyword
const Person = {
    name: "Alice",
    greet(g) {
      console.log(`${g} my name is ${this.name}`);
    },
  };
  
  Person.greet();
  
  // Function reference, causes issue with `this`
  const greetFn = Person.greet;
  greetFn();  // `this` is not bound to `Person` here!
  
  
  const AnotherPerson = {
    name: "Bob",
  };
  
  // Using call - immediately invokes and sets `this` to `AnotherPerson`
  Person.greet.call(AnotherPerson, "Hello");
  
  // Using apply - same as call, but arguments are passed as an array
  Person.greet.apply(AnotherPerson, ["hi"]);
  
  // Using bind - returns a new function with `this` bound to `AnotherPerson`
  // This does not invoke the function immediately.
  const boundGreet = Person.greet.bind(AnotherPerson, "hey");
  boundGreet();  // You need to call the bound function to invoke it
  