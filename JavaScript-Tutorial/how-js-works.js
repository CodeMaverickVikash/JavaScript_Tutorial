
// Need to understand event loop first to understand how js work, Js working depends on event working ---------------------------------------------------------------------

// ----------------------------------------- Event loop ----------------------------------------

/*
 * What is Callback queue?
 * What is Micro-task queue?
 */

/*
Web APIs
* setTimeout
* DOM APIs
* fetch()
* LocalStorage
* console
* Location
* timer
*/

/**
 * Stack (LIFO – Last In, First Out)
 * Queue (FIFO – First In, First Out)
 */

// How everything working inside the browser?

// Example 1 -
console.log("start");

// once below line comes into picture, it will attach callback with timer of 5000ms into Web environment - Timer is the API of browser.
setTimeout(() => {
  console.log("callback");
}, 5000);

console.log("End");

// When timer expired that callback need to be pushed into callstack but it can't be pushed directly into callstack, now event loop and callback/task queue comes into picture.

/*
- When timer expired it put into callback queue
- The job of event loop is to check callstack and the callback queue and puts the callback into callstack
- If callstack is empty then event loop gives the chance to the callback and microtask queue to get callback and push into callstack.
- Whatever comes into callstack, it quickly executes them
- How callstack will execute callback function - it create execution context and will execute code line by line
*/

// Example 2 -
console.log("Start");

document.getElementById("btn").addEventListener("click", function () {
  console.log("callback");
});

console.log("End");

/*
 * Why we need callback queue - when user click continuously on control element, in that case multiple callback trigger and goes into callback queue, if user has clicked 5 times then 5 callback will go into callback queue and by event loop pushed it into callstack one by one.
 */

// Example 3 -
console.log("Start");

setTimeout(() => {
  console.log("callback");
}, 5000);

// once below line comes into picture, it will make request to the server and attach callback into Web APIs environment - Time is the API of browser.
fetch("https://api.exampleserver.com").then((data) => {
  console.log("callback", data);
});

console.log("End");

// When got the data from server then callback need to be pushed into callstack but it can't be pushed directly into callstack, now event loop and micro-task queue comes into picture.

/*
 * fetch works differently rather than other web APIs
 * Micro-task queue is the same as callback queue but it has higher priority than callback queue.
 * All the callback functions which comes through the promises and mutation observer will go inside the microtask queue.
 * mutation observer - Checks if there is mutation in DOM tree or not, if there is mutation in DOM tree then it's going to be execute some callback.
 * All the callback functions which comes through the setTimeout and DOM APIs will go inside the callback queue also know as task queue.
 * Read it out STARVATION - When microtask queue has tree of task (Infinite task) then any callback is not going to execute from callback queue, in this scenarios starvation problem created.
 */

/*
 * Whenever run javascript program global execution context is created. it has two component
 * 1. one is memory component also know as variable env and
 * 2. code component.
 */

// ------------------- Browser context API - Callstack, Heap memory, Execution context, lexical environment

/**
 * Heap memory - jitne bhi hum variable banate hai ya jo program data hota hai wo heap memory me store hota hai
 * Execution context - Jab bhi hum func chalayenge func apna ek imaginary container bana leta hai, Imaginary container is called execution context. This includes variable, function and lexical environment of that func into container.
 * Lexical environment - it decide/prepare chart kon kya access karenga, it holds it's scope and scope chain.
 * Callstack - Callstack - maintains the order of execution of execution context and follows LIFO approach to manage execution context.
 * callstack fancy name -
        1) Execution context stack - best
        2) Control stack
        3) Machine stack
        4) Runtime stack
        5) Program stack
 */

function abcd() {
  const a = 23;
  function def() {
    const b = 34;
    console.log(a); // no error
  }
  // console.log(b); // throw error
}

// ---------------------------------------- How JavaScript Works ? ------------------------------------

/*
Important: Everything in javascript happens inside as execution context. To execution context, you can imagine the big box or container where js code executed.

Execution context has two components: 
1. Memory component/Variable environment, here variable and functions stored in the form of key-value pair.
2. Code component/Thread of execution - This is place where code executed at a time
- Single threaded means js can execute one command at a time.
- Synchronous means js can execute commands in a specific order - it will go on next line when previous command completed.

Creation of execution context:
phase-I - Memory creation phase
phase-II - Code execution phase

It manages the stack/call stack to handle this EC creation, deletion and the control.
Call stack maintains the order of execution of EC.
*/

// Example -
// Create global execution context
var n = 2;
function square(num) {
  var ans = num * num; // create brand new EC
  return ans;
}

var square2 = square(n); // while invoke create brand new EC and when finished gives the whole control to parent EC and delete brand new created EC.
var square4 = square(4);


// Interview questions

// Ques. JavaScript is synchronous or Asynchronous?
// Ques. JavaScript is single threaded or multi threaded?
// Ans: Javascript is synchronous single threaded language