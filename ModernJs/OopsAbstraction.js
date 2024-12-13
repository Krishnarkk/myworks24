//abstraction hiding function definition juz calling function drive and brake , using interface
class Car {
  drive() {
    console.log("Driving");
  }
  brake() {
    console.log("Brake");
  }
}
const myCar = new Car(); //interface
myCar.drive();
myCar.brake();
