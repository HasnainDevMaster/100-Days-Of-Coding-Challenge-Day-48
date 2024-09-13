"use strict";
// 100 Days Of Coding Challenge!
/** Question 143:
Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.*/
//--------------------------------------------------------------------------------------------
// Create a Promise that resolves or rejects based on a condition
const examplePromise = new Promise((resolve, reject) => {
    const success = true; // Change this to false to test rejection
    if (success) {
        resolve("Promise resolved successfully!");
    }
    else {
        reject("Promise rejected.");
    }
});
// Handle the resolved and rejected states using .then() and .catch()
examplePromise
    .then((message) => {
    console.log(message); // Output if resolved: Promise resolved successfully!
})
    .catch((error) => {
    console.error(error); // Output if rejected: Promise rejected.
});
