//generator is process which helps to pause and resume the execution and yield multiple values
//advantages
 // Lazy evaluation
 // Memory efficient
 //


function* generatorFunction(){
    yield "Neo"
    yield "Morphous"
    yield "Trinity"
    return "The final"
}
const generator=generatorFunction();
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())


console.log(generator)

// Iterate over Generator object
for (const value of generator) {
    console.log(value)
  }


  function sum(){
    return a+b
  }

  (sum())();