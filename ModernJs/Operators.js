//Arithmatic operator  [+,-,*,%]
//Logical    [&& , || , !]
//Comparision  [== , ====]
//Bitwise    [& , << , >> ,<<< , | , ^ , ~]   binary conversion

  let c=10 // 1010
  let d=11 //1011
  console.log(c&d)        //10 (2^0 + 2^1 + 2^2 + 2^3 = 10)
  console.log(c|d)         //11
  console.log(c^d)          //1      0001
  console.log(~d)
  let k=11;
  let j=10;
  console.log(k<<2) // 1011 ==> 00101100 ==> 12 + 32 ==> 44
  console.log(k>>2) //1011 => 0010 => 2

  //Miscllaneous 
//   [? : ,?? , instance Of  , delete]

console.log(10-"10"+"10")
