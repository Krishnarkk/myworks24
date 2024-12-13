// promise is proxy
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("I am resolved");
  }, 1000);
});

myPromise.then((res) => console.log(res));

// start ==> Initialisation of promise
const fetchData = () => {
  // we created promise
  return new Promise((resolve, reject) => {
    //asynchronous operaration completion
    // setTimeout is at Pending state
    setTimeout(() => {
      const success = true;
      //asynchronous operation complete.
      //fulfilled state doe success and rejected for error
      if (success) {
        //pending to success
        resolve("Data fetched succesfully");
      } else {
        //pending to rejected
        reject("rejected");
      }
    }, 5000);
  });
};

fetchData()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => console.log(err));

//check functional prototype
//built in state of array index
