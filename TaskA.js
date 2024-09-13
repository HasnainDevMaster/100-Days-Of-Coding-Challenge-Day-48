"use strict";
// 100 Days Of Coding Challenge!
/** Question 142:
Create a Promise that resolves with `Hello, World!` after 2 seconds.*/
//---------------------------------------------------------------------
// Create a new Promise that resolves after 2 seconds
const helloWorldPromise = new Promise((resolve) => {
    // Use setTimeout to delay the resolution
    setTimeout(() => {
        // Resolve the promise with the string 'Hello, World!'
        resolve("Hello, World!");
    }, 2000); // 2000 milliseconds = 2 seconds
});
// Example usage
helloWorldPromise.then((message) => {
    console.log(message); // Output: Hello, World!
});
