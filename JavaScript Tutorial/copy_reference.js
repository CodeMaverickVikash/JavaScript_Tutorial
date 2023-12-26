// ---------------------------------- Copy and reference ---------------------------------
// Reference - it add and delete element from jaha se reference liya hai
let a = [1, 2, 3, 4, 5];
const b = a; // it's a reference, now b and a bind together
b.pop();
a.pop();
console.log({ a, b }); // deleted from both

// Copy - work individually
const c = [...a];
