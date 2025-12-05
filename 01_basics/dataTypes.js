"use strict"; //treat all JS code as newer version

//  alert(3 + 3) //we are using nodejs, not browser that is why this will not work here

let name = "Prince"; 
let age = "24";

// number => 2 to power 53
//  bigint
// String => ""
// boolean => true/false
// null => standalone value
// undefined => value is not yet assigned
//  symbol => used for unique

// Object

// Comparsion and Equality check
console.log(null>0);         // false
console.log(null === 0);     // false
console.log(null == 0);      // false
console.log(null >=0);       // true
console.log(null<=0);        // true

/* 
    Note: The reason is that an equality check == or === and comparasion > < >= <= works differently
    Comparisons convert null to a number, tratingt it as 0.
    That's why last two console are true and rest three are false.
*/

/*
    Types of Data Types in JS
    1. Primitive
    2. Non Primitive.

    1) Primitive
      String, Number, Boolean, null, undefined, Symbol, BigInt

    2) Non Primitive
        Arry, Obhects, Functions

    JS is a dynamically typed , single threaded languange.
    JavaScript is a single-threaded language, meaning it executes one task at a time using a single call stack.
    However, JavaScript's single-threaded nature does not limit its ability to handle multiple tasks efficiently, thanks to its non-blocking asynchronous capabilities.

    In JavaScript, the call stack is used to manage the execution of functions. It operates on a Last In, First Out (LIFO) principle, 
    where functions are pushed onto the stack when called and popped off once completed. This ensures that only one task is executed at any given time.


    Despite being single-threaded, JavaScript achieves non-blocking behavior through the event loop, callback queue, and asynchronous APIs provided by the runtime environment 
    (e.g., browsers or Node.js). These mechanisms allow JavaScript to handle tasks like network requests, timers, or file I/O without freezing the main thread.

    The Event Loop Process

    1. Call Stack: Executes synchronous code.

    2. Web APIs: Handles asynchronous tasks like setTimeout, fetch, or I/O operations.

    3. Callback Queue: Stores completed asynchronous tasks.

    4. Event Loop: Monitors the call stack and pushes tasks from the callback queue when the stack is empty.

    Asynchronous Programming Tools

    1. Callbacks: Functions executed after an asynchronous task completes.

    2. Promises: Provide a structured way to handle asynchronous operations with .then() and .catch().

    3. Async/Await: Syntactic sugar over promises, making asynchronous code look synchronous.

    Why JavaScript is Designed This Way

    1. JavaScript's single-threaded, non-blocking design is ideal for web development:

    2. Improved User Experience: Keeps the UI responsive by avoiding thread contention.

    3. Efficiency: Handles multiple I/O tasks without requiring multiple threads.

    4. Concurrency: Manages asynchronous tasks effectively using the event loop.
*/