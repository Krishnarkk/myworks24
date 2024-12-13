//add has fixed context and not accepting other than a and b  add is Pure
const add = (a, b) => {
  return a + b;
};

//Pure Function (it is not changing context , => not affcting original) map
//this is immutable in nature
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5, 6];
console.log(numbers, newNumbers);

const res = add(2, 3);
console.log(typeof add);

//Type cohersion and type checking
//js performs Implicit cohersion

//=== strict equality stopping implicit cohersion
console.log("5" === 5);
console.log("5" == 5);

//explicit cohersion using inbuilt method , .toString()
