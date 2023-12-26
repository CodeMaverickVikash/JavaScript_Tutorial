// Whenever run javascript program global execution context is created. it has two component one is momory component also know as varibale env and code component.

// ------------------- Browser context API - Stack, Heap memory, Execution context, lexical environment
// Stack - LIFO
// Heap memory - jitne bhi hum variable banate hai ya jo program data hota hai wo heap memory me store hota hai
// Execution context -
/**
 * Jab bhi hum func chalayenge func apna ek imaginary container bana leta hai, Imaginary container is called execution context.
 * This includes variable, function and lexical environment of that func into container
 * Lexical environment - it decide/prepare chart kon kya access karenga, it holds it's scope and scope chain
 */

function abcd() {
  const a = 23;
  function def() {
    const b = 34;
    console.log(a); // no error
  }
  // console.log(b); // throw error
}

// Interview questions

// Ques. JavaScript is synchronus or Asynchronus?
// JQues. avaScript is single threaded or multi threaded?
// Ans: Javascript is synchronus single threaded language

// Callstack - it only manages the execution context
// Callstack - maintains the order of execution of execution context

// callstack fancy name -
// 1) Execution context stack - best
// 2) Control stack
// 3) Machine stack
// 4) Runtime stack
// 5) Program stack

// How JavaScript Works ?
/* Important: Everything in javascript happens inside as execution context.
to execution context, you can imagine the big box or continer where js code executed

it has two components: 
1. memory component/Vairbale environment, here varibale and functions stored in the form of key-value pair
2. Code component/Thread of execution - This is place where code executed at a time
single threaded means js can execute one command at a time
Synchronus means js can execute commands in a specific order - it will go on next line when previous command completed

Creation of execution context
phase-I - Memory creation phase
phase-II - Code execution phase

It manages the stack/call stack handle this EC creation, deletion and the control.
Call stack maintains the order of execution of EC.
*/

// Create global execution context
var n = 2;
function square(num) {
  var ans = num * num; // create brand new EC
  return ans;
}

var square2 = square(n); // while invoke create brand new EC and when finished gives the whole control to parent EC and delete brand new created EC.
var square4 = square(4);
// It manages the stack handle this EC creation, deletion and the control
