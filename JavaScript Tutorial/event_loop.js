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

// How everything working inside the browser?

// Example 1 -
console.log("start");

// once below line comes into picture, it will attach callback with timer of 5000ms into Web environment - Timer is the API of browser.
setTimeout(() => {
  console.log("callback");
}, 5000);

console.log("End");

// When timer expired that callback need to be pushed into callstack but it can't be pushed directly into callstack, now event loop and callback queue comes into picture.

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
