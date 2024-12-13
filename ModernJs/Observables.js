// Using `require()` instead of `import` for CommonJS
const { Observable } = require("rxjs");

const observable = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  subscriber.complete();
});

observable.subscribe({
  next(x) {
    console.log(`Got value of x is ${x}`);
  },
  error(err) {
    console.log(`Error: ${err}`);
  },
  complete() {
    console.log("Completed");
  },
});
