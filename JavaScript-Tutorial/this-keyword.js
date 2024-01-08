// --------------------------------------------- this keyword ---------------------------------------------
/**
 * The “this” keyword refers to the object that the function is a property of.
 */
function doSomething() {
  console.log(this); // refer to the window object because doSomething is the property of window
}

doSomething();

// Example - 2
var obj = {
  name: "vivek",
  getName: function () {
    console.log(this.name); // getName is the property of obj, so it will refer to the obj
  },
};

obj.getName();

// Example - 3
var obj = {
  name: "vivek",
  getName: function () {
    console.log(this.name); // refer to the obj
  },
};

var getName = obj.getName;

var obj2 = { name: "akshay", getName };
obj2.getName(); // now here getName refer to the obj2 because it's a property of obj2 now

// ------------------------------- Function declaration and function expression -------------------------------
/**
 * Function declaration and function expression are two ways to define functions in JavaScript,
 * function declarations are hoisted entirely, making them accessible before the actual declaration in the code, while function expressions are not hoisted in the same way and need to be declared before use. Function expressions are more versatile in certain situations, such as when functions need to be assigned conditionally or when creating anonymous functions.
 */

// Function declaration
function add(a, b) {
  return a + b;
}

// Function expression
const add = function (a, b) {
  return a + b;
};

// example 2
const multiply = function (a, b) {
  return a * b;
};

const operation = Math.random() > 0.5 ? add : multiply;
console.log(operation(2, 3));
