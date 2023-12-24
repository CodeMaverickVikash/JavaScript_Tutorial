/*
 * global scope - Variables declared in the global scope are accessible from any part of the code, including functions and other scopes.
 * local scope - Variables declared within a function are typically local to that function and cannot be accessed outside of it.
 * lexical scope,
 * lexical environment,
 * closure
 */

let i; // var created in global scope

for (i = 1; i <= 5; i++) {
  const added = i + 2; // var created in local scope
  console.log(i, added);
}
// console.log(i, added); // can't access 'added' var
console.log(i);

function sum2(num) {
  console.log(num + i);
}

sum2(4);
