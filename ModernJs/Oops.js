// Object oriented programming

//static not changing behaviour
class ES6 {
  static display() {
    console.log("first");
  }
  display2() {
    return 10;
  }
}
let a = ES6.display();
//  console.log(a);

let b = new ES6();
console.log(b.display2());

//inheritance
//single inheritance
class Parent {
  func1() {
    console.log("Function2");
  }
}
class child extends Parent {}
let obj1 = new child();
obj1.func1();

//multileveel inheritance

class child2 extends child {}
let obj2 = new child2();
obj2.func1();

//hierarchy
class child3 extends Parent {}
let obj3 = new child3();
obj3.func1();

//encapsulation

//abstraction

//polymorphism
//  overriding

class OveridingParent {
  display() {
    console.log("Parent function");
  }
}

class OveridingChild extends OveridingParent {
  display() {
    console.log("child functio");
  }
}

var k;
k = 10;
k = []; //behaviour of variable is changed

class Overloading {
  display(a=10,b=11) {
    console.log(a+b,"first");
  }
  display(a="string",b="123",c="123"){
    console.log(a+b+c,"sec")
  }
  display(a=[1,2,3]){
    console.log(a,"third")
  }
}

let obj5=new Overloading();
console.log(obj5.display())   //last latest function takes priority.

//js no overloading happens not possible








