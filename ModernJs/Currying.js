//taking multiple inputs and creating partial functions
//function execution continuous even b is undefined or not passed value
function multiply(a) {
  return function (b) {
    return a * b;
  };
}

const double = multiply(2);
console.log(double(5));
