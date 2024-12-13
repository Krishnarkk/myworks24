
//Symbols are primarily used to create unique property keys for objects that don't clash with other properties
//Symbols are particularly useful when you need to avoid name collisions in properties and when you want to create "hidden" or non-enumerable properties.
const sym=Symbol("my symbol");
const name=Symbol("name");
const obj={
    [sym]:"secret",
    [name]:"react"
}
console.log(obj[sym]);
console.log(obj[name]);
console.log(obj)
console.log(Object.keys(obj));
 