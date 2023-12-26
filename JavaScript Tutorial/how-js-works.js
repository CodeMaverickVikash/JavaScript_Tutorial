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

// Basic: Everything in javascript happens inside as execution context
// Ans: Javascript is synchronus single threaded language

// Callstack - it only manages the execution context
// Callstack - maintains the order of execution of execution context

// callstack fancy name -
// 1) Execution context stack
// 2) Control stack
// 3) Machine stack
// 4) Runtime stack
// 5) Program stack
