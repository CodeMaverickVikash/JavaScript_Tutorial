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
    console.log(b); // throw error
}

// ---------------------------------- Copy and reference ---------------------------------
// Reference - it add and delete element from jaha se reference liya hai
let a = [1, 2, 3, 4, 5];
const b = a; // it's a reference, now b and a bind together
b.pop();
a.pop();
console.log({a, b}); // deleted from both

// Copy - work individually
const c = [...a];









