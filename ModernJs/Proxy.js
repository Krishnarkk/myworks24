const profile = {
  name: "John",
  age: 20,
};

const handler = {
  get: (obj, prop) => {
    console.log(`geting property ${prop}`);
    return prop in obj ? obj[prop] : "property does not exists";
  },
  set: (obj, prop, value) => {
    if (prop === "age" && typeof value !== "number") {
      throw new Error("Age must be number");
    }
    obj[prop] = value;
    console.log(`setting property ${prop} to ${value}`);
    return true;
  },
};

const proxy = new Proxy(profile, handler);
console.log(proxy.name);
proxy.age = 25;
console.log(proxy.age);
proxy.gender = "male";
console.log(proxy.gender);
console.log(profile)


//proxy used to change function in object and add extra properties to existing property and manipulate property and create new property



//observables
