//Decorators
function log(target, key, discriptor) {
  const originalMethod = discriptor.value;
  discriptor.value = function (...args) {
    console.log(`calling ${key} with arguments ${args}`);
    return originalMethod.apply(this, args);
  };
  return discriptor;
}

class Example {
  @log
  greet(name) {
    return `Hello ${name}`;
  }
}

const example = new Example();
console.log(example.greet("Alice"));
