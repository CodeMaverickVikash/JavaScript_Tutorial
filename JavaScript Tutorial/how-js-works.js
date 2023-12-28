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