// --------------------------------------- console API ----------------------------------
// console.time('your code took');
// console.log('hello console');
// console.log(4+23);
// console.log([1,2,3,4]);
// console.table({vikash: 'this me', marks: 34});
// console.warn("this is a warning");
// console.error('this is error');
// console.clear();
// console.timeEnd('your code took');

// var, let and const
const vikash = "Hello"; // no change, no redeclare

// ------------------------------ Difference btw let and var -------------------------------
// let	                                        |      var
// -----------------------------------------------------------------------------
// let is block-scoped.	                        |   var is function scoped.
// let does not allow to redeclare variables.   |   var allows to redeclare variables.
// Hoisting does not occur in let.	            |   Hoisting occurs in var.
//  does not Add itself into window object      |   Add itself into window object

let abc = function () {
  for (var i = 0; i < 12; i++) {
    console.log(i);
  }
  console.log(i); // ok

  for (let i = 0; i < 12; i++) {
    console.log(i);
  }
  console.log(i); // not ok
};
// abc();

// case: 2
let sanu = "Hyy"; // no redeclare
// let sanu = 'Hyy'; // Throw error
var marks = "200"; // allow redeclare
// var marks = '300'; // no error

// ------------------------------------------- Hoisting --------------------------------------
// Hoisting is JavaScript's default behavior of moving declarations to the top.
// Hoisting are two types varibale hoisting and function hoisting
x = 5; // assign
// console.log(x);
var x; // declarations
// let x; // it will throw error
// Important: JavaScript only hoists declarations, not initializations.
var x = 5; // Initialize x
// console.log(x + " " + y);
var y = 7; // Initialize y

console.log(a);
// console.log(b);
// console.log(c);
getName();
console.log(getName);

var a = 8;
// let b = 1; // it will throw error, doesn't support hoisting
// const c = 3; // it will throw error, doesn't support hoisting
function getName() {
  console.log("Hosting: Vikash");
}
// const getName = function() { // it will throw error
//     console.log("Hosting: Vikash");
// }
// const getName = ()=> { // it will throw error - it is behave like a variable
//     console.log("Hosting: Vikash");
// }

// -------------------------------------- variable, datatypes and operator ---------------------
// var num1= 23;
// var num2= 3;
// console.log(num1+num2);
// var flt= 34.4;
// var str1= 'this is str type';

// // Boolean
// var a= true;
// var b= false;
// console.log(a, b);

// // At a very high level, there are two types of datatypes in js
// // 1. primitive datatype: undefined, null, Number, String, Boolean, Symbol
// // 2. reference datatype: Array and Object

// ------------------------ Loops in js - for, forEach, while, do-while, for-of, for-in ----------

// ------------------------------ Regular and Arrow function --------------------------------------
// One liners do not require braces/return
// one line will automatically return

let greet = () => {
  return "good morning";
};
greet = () => "Good Morning";
greet = () => ({ name: "Vikash" });

// Single parameters do not need parenthesis but you will have to put parenthesis if there are multiple paramteres
greet = (name) => "Good Morning " + name + ending;

// ---------------------------------------- Objects methods ---------------------------------------
// JSON.stringify, JSON.parse
var person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const jsObj = {
  fname: "Vikash",
  lname: "Maskhare",
  que: "How are you?",
};

const convertedIntoJson = JSON.stringify(jsObj);
console.log(convertedIntoJson);
console.log(typeof convertedIntoJson);

const convertedIntoObject = JSON.parse(convertedIntoJson);
console.log(convertedIntoObject);
console.log(typeof convertedIntoObject);

// ------------------------------------ Array methods ----------------------------------
// indexOf, pop, join, push, shift, unshift, toString
myarr = ["fan", "camera", 23, null, true];
// myarr.indexOf(23);
// myarr.pop();
// myarr.join(" * ");
// myarr.push("vikash");
// myarr.shift();
// myarr.unshift("vikash");
// myarr.toString();

// ---------------------------------------- String methods ---------------------------------
// indexOf, lastIndexOf, slice, split, replace
window.mystring = "vikash is a good boy good";
// console.log(mystring.length);
// console.log(mystring.indexOf("good"));
// console.log(mystring.lastIndexOf("good"));
// console.log(mystring.slice(0,6));
// d=mystring.replace("vikash", "sanu");
// console.log(d, mystring);

// --------------------------------------------- Date -----------------------------------
// let mydate= new Date;
// console.log(mydate.getTime());
// console.log(mydate.getFullYear());
// console.log(mydate.getDay());
// console.log(mydate.getMinutes());
// console.log(mydate.getHours());

// ---------------------------------- Truthy and falsy values --------------------------------

// We have 5 falsy values: 0, '', undefined, null, NaN
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonus'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// let height; // it's a declaration, not defination
// (height) ? console.log("YAY, Height is defined") : console.log("Undefined");

// --------------------------- Destructuring array and object ----------------------------------------
let arr = [1, 2, 3];
let [x2, y2, z] = arr; // array destructuring

let obj = {
  fname: "vikash",
  lname: "maskhare",
  phone: 293832738,
  email: "viaksj@gmail.com",
};

let { fname, email } = obj; // you need to mentioned same name as mentioned in obj
// console.log(fname + " " + email);

let { fname: first_name, lname: last_name } = obj; // with new variable
console.log(first_name, last_name);

// -------------------------------------- Spread and rest operator on '...arr/obj' -------------------------------
// Spread opt - pack out
// Rest opt - pack in
let arr1 = [9, 8, 7];
let arr2 = [1, 2, ...arr1]; // arr2 built with spread opt
// console.log(arr2);

// SPREAD, because on right side of =
const arr3 = [1, 2, ...[3, 4, 5]];
// REST, because on left side of =
const [a1, , ...others] = [1, 2, 3, 4, 5];
// console.log(a, others);

let add = (...numbers) => {}; // packing in - rest opt

add(1, 2);
// add(3, 4, 5);
// add(6, 7, 8, 9);

const item = [23, 45, 67];
add(...item); // packing out

// ----------------------------------- Nullish coalescing operator '??' ------------------------------
// ?? returns the first argument if it’s not null/undefined. Otherwise, the second one.
let g = 45;
const val = g ?? 10;
console.log(val);

// ------------------------------------- Optional chaining '?.' --------------------------------------
// is a safe way to access nested object properties, even if an intermediate property doesn’t exist.
// let data = {
//     ok: function() {
//         console.log("ok");
//     },
//     no: {
//         status: true
//     }
// };
// data.ok && data.ok();
// console.log(data?.no?.status);
// let user = {}; // user has no address
// console.log(user.address.street); // Error!

// let user = {}; // user has no address
// console.log(user?.address?.street); // undefined (no error)

// ------------------------------------- Object literal ----------------------------------------------
// It's the enhanced version of obj, introduced in es6
// Rules
// 1) if key and value name is same then just write one
id = "Vikash";
obj = {
  // id: id // instead
  id,
};

// 2) computatuon on property or value of obj
obj = {
  [id + 2]: [id + " " + "Maskhare"],
};

// 3) new function syntax
obj = {
  // show: function() {  } // instead
  show() {},
};

// ------------------------------- Template literal - backtick/backquote -----------------------------
const greeting = "Hello";
const name = "Vikash";
const userMsg = `${greeting}, ${name}`; // template literal

// Imediately invoked function expression - it will call once, we can't reuse it
(function () {
  console.log("This will never run again.");
})();

// In arrow function
(() => {
  console.log("This will ALSO never run again.");
})();

// ------------------------------ Closure - function ke ander function ------------------------------
// Anonymus function - Which doesn't have name.
function sum(a) {
  let c = 4; // laxical scope
  return function (b) {
    // Anonymus function
    console.log(a + b + c);
  };
}
let anonymasFunc = sum(2); // after first call value will not lost, keep retain is called closure
anonymasFunc(5);

// Example second
const addParams = function (a, b, c) {
  return {
    getSumTwo: function () {
      return a + b;
    },

    getSumThree() {
      return a + b + c;
    },
  };
};

const storeObj = addParams(4, 3, 6);
console.log(storeObj.getSumTwo());
console.log(storeObj.getSumThree());

/* ---------------------------------------------- Scope: --------------------------------------
 * Block scope - Variables declared inside a pair of curly braces cannot be accessed from outside.
 * Function scope - Variables declared inside a function connot be accessed from outside the function.
 * Global scope - Gloabally scoped variable can be accessed inside a block or function.
 */

// --------------------------------------------- Ternary operator -----------------------------
// Sometimes, we need to assign a variable depending on a condition. that time we use conditional(Ternary) operator (?)
// let result = condition ? value1 : value2;

// multiple(?)
// let age = prompt('age?', 18);
// let message = (age < 3) ? 'Hi, baby!' :
//   (age < 18) ? 'Hello!' :
//   (age < 100) ? 'Greetings!' :
//   'What an unusual age!';
// alert( message );

// ---------------------------------------- Nullish coalescing operator '??' ------------------------------
// The result of a ?? b is: ?? returns the first argument if it’s not null/undefined. Otherwise, the second one
// let user;
// alert(user ?? "Anonymous"); // Anonymous (user not defined)
// let firstName = null;
// let lastName = null;
// let nickName = "Supercoder";

// // shows the first defined value:
// alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder

/* ------------------------------- The important difference between || and ?? is that:
    || returns the first truthy value.
    ?? returns the first defined value.
*/

// function hello(name) {
//     let phrase = `Hello, ${name}!`;

//     debugger;  // <-- the debugger stops here

//     console.log(phrase);
// }

// hello("vikash");

// -------------------- The “non-existing property” problem: solution - Optional chaining '?.'
// let user = {}; // a user without "address" property
// console.log(user.address.street); // Error!

// let user = {}; // user has no address
// console.log( user?.address?.street ); // undefined (no error)

// JavaScript Modules
// JavaScript modules allow you to break up your code into multiple files. : means - import and export
// If we are using normal export then need to use {}, and using default export, don,t need  to use {}.

// ------------------------------ Bind(), call() and apply() -------------------------
const lufthansa = {
  airline: "lufthansa",
  iatacode: "LH",
  booking: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iatacode}${flightNum}`
    );
    this.booking.push({ flight: `${this.iatacode}${flightNum}`, name });
  },
};

const errowings = {
  airline: "Errowings",
  iatacode: "EW",
  booking: [],
};

const bookFn = lufthansa.book;

bookFn.call(lufthansa, 23, "Vikash");
bookFn.apply(lufthansa, [23, "Sanu"]); // Apply method works same as call() but we have to pass rest argument as a array
const bookFunc = bookFn.bind(errowings, 23); // Bind method - works same as call() but it will return same function with 'this' keyword
bookFunc("Mayank");
