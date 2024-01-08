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

// --------------------------------------- Shallow copy and Deep copy ---------------------------------------
/**
 * When you want to create a copy of an object or an array, you can make either a shallow copy or a deep copy. The difference between the two lies in how nested objects and arrays are handled.
 */

/**
 * A shallow copy creates a new object or array, but it doesn't create copies of nested objects or arrays. Instead, it copies references to the original nested objects or arrays. As a result, changes made to nested objects or arrays in the copy will affect the original, and vice versa.
 */

// Using Object.assign() for objects
const originalObject = { a: 1, b: { c: 2 } };
const shallowCopyObject = Object.assign({}, originalObject);

// Using spread operator for arrays
const originalArray = [1, [2, 3]];
const shallowCopyArray = [...originalArray];

/**
 * A deep copy creates a new object or array along with copies of all nested objects and arrays. Changes made to the copy will not affect the original, and vice versa.
 * Achieving a deep copy can be more complex, especially when dealing with nested structures. One common way to perform a deep copy is to use JSON.parse() and JSON.stringify().
 */
const originalObject2 = { a: 1, b: { c: 2 } };
let deepCopyObject = JSON.parse(JSON.stringify(originalObject));
deepCopyObject = structuredClone(originalObject2);

const originalArray2 = [1, [2, 3]];
const deepCopyArray = JSON.parse(JSON.stringify(originalArray));
// Keep in mind that this method has some limitations. It won't work with objects or arrays containing functions, undefined values, or circular references. If your data includes such elements, you may need to use a custom deep copy function or a library like Lodash's _.cloneDeep().
