/**
 * Implicit Type Coercion - Implicit type coercion in javascript is the automatic conversion of value from one data type to another. It takes place when the operands of an expression are of different data types.
 * 1. String coercion
 * 2. Boolean Coercion
 * 3. Logical operators
 * 4. Equality Coercion
 */


// ------------------- Copy and reference or passed by value and passed by reference -----------------

// Reference - it add and delete element from jaha se reference liya hai
let a = [1, 2, 3, 4, 5];
const b = a; // it's a reference, now b and a bind together
b.pop();
a.pop();
console.log({ a, b }); // deleted from both

// Copy - work individually
const c = [...a];
