// 100 Days Of Coding Challenge!

/** Question 144: “Unified Promises: The Power of Promise.all().”
Explain the use of the Promise.all() method with an example.*/

//----------------------------------------------------------------

// Create multiple promises
const promise1 = Promise.resolve("First promise resolved");
const promise2 = Promise.resolve("Second promise resolved");
const promise3 = Promise.resolve("Third promise resolved");

// Use Promise.all() to wait for all promises to resolve
Promise.all([promise1, promise2, promise3])
  .then((messages) => {
    console.log(messages);
    // Output: ['First promise resolved', 'Second promise resolved', 'Third promise resolved']
  })
  .catch((error) => {
    console.error("One of the promises rejected:", error);
  });
