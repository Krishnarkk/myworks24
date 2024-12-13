//memory management and garbage collection
let larger = new Array(10000).fill("data");
function processData() {
  console.log(larger);
}
processData();
larger = null; //clears reference allowing garbage collector to freeing memory
