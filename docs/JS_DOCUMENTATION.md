# JavaScript Complete Documentation
## From Basic to Advanced

---

## Table of Contents

1. [Introduction](#1-introduction)
2. [Variables and Data Types](#2-variables-and-data-types)
3. [Operators](#3-operators)
4. [Control Flow](#4-control-flow)
5. [Functions](#5-functions)
6. [Objects](#6-objects)
7. [Arrays](#7-arrays)
8. [Strings](#8-strings)
9. [ES6+ Features](#9-es6-features)
10. [Asynchronous JavaScript](#10-asynchronous-javascript)
11. [DOM Manipulation](#11-dom-manipulation)
12. [Events](#12-events)
13. [Error Handling](#13-error-handling)
14. [Modules](#14-modules)
15. [Advanced Concepts](#15-advanced-concepts)
16. [OOP](#16-object-oriented-programming)
17. [Functional Programming](#17-functional-programming)
18. [Design Patterns](#18-design-patterns)
19. [Performance](#19-performance-optimization)
20. [Best Practices](#20-best-practices)

---

## 1. Introduction

### What is JavaScript?
JavaScript is a high-level, interpreted programming language. It's dynamic, weakly typed, prototype-based, and has first-class functions.

### Key Features
- Interpreted Language
- Dynamic Typing
- Prototype-based
- First-class Functions
- Event-driven
- Non-blocking

### JavaScript Engines
- **V8**: Chrome, Node.js
- **SpiderMonkey**: Firefox
- **JavaScriptCore**: Safari

### Where JavaScript Runs
- Browser (Client-side)
- Server (Node.js, Deno, Bun)
- Mobile (React Native)
- Desktop (Electron)

### How to Include JavaScript
```html
<!-- Inline -->
<button onclick="alert('Hello!')">Click</button>

<!-- Internal -->
<script>
    console.log('Hello World!');
</script>

<!-- External -->
<script src="script.js"></script>
<script src="script.js" defer></script>
```

### Console Methods
```javascript
console.log('Message');
console.error('Error');
console.warn('Warning');
console.table([{name: 'John'}]);
console.time('Timer');
console.timeEnd('Timer');
```

---

## 2. Variables and Data Types

### Variables

#### var (Function-scoped, hoisted)
```javascript
var name = "John";
var age = 30;
var age = 25; // Can redeclare

function test() {
    var x = 10;
    if (true) {
        var x = 20; // Same variable
    }
    console.log(x); // 20
}
```

#### let (Block-scoped)
```javascript
let name = "Jane";
name = "John"; // Can reassign
// let name = "Doe"; // Error

if (true) {
    let blockVar = "Block scoped";
}
// console.log(blockVar); // Error

for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100); // 0,1,2
}
```

#### const (Block-scoped, immutable binding)
```javascript
const PI = 3.14159;
// PI = 3.14; // Error

const person = { name: "John" };
person.name = "Jane"; // OK (object mutable)
// person = {}; // Error

const arr = [1, 2, 3];
arr.push(4); // OK
// arr = []; // Error
```

### Data Types

#### Primitive Types (7)

**1. Number**
```javascript
let int = 42;
let float = 3.14;
let exp = 2.5e6; // 2500000
let binary = 0b1010; // 10
let octal = 0o744; // 484
let hex = 0xFF; // 255

// Special values
let inf = Infinity;
let negInf = -Infinity;
let notNum = NaN;

// Methods
Number.isInteger(42); // true
Number.isNaN(NaN); // true
Number.parseFloat("3.14"); // 3.14
Number.parseInt("42"); // 42
(3.14159).toFixed(2); // "3.14"
(1234).toExponential(2); // "1.23e+3"
```

**2. BigInt**
```javascript
let bigNum = 9007199254740991n;
let bigInt = BigInt("9007199254740991");

// Operations
let sum = 10n + 20n; // 30n
let product = 5n * 2n; // 10n
// let mixed = 10n + 5; // Error: Cannot mix

// Comparison
10n === 10; // false
10n == 10; // true
10n < 20; // true
```

**3. String**
```javascript
let single = 'Hello';
let double = "World";
let backtick = `Template literal`;

// Template literals
let name = "John";
let age = 30;
let message = `My name is ${name} and I'm ${age} years old`;

// Multi-line
let multiLine = `Line 1
Line 2
Line 3`;

// Escape characters
let escaped = "He said \"Hello\"";
let newLine = "Line 1\nLine 2";
let tab = "Column1\tColumn2";

// String methods
"hello".length; // 5
"hello".toUpperCase(); // "HELLO"
"HELLO".toLowerCase(); // "hello"
"hello".charAt(0); // "h"
"hello".indexOf("l"); // 2
"hello".lastIndexOf("l"); // 3
"hello".includes("ell"); // true
"hello".startsWith("he"); // true
"hello".endsWith("lo"); // true
"hello".slice(1, 4); // "ell"
"hello".substring(1, 4); // "ell"
"hello".substr(1, 3); // "ell" (deprecated)
"  hello  ".trim(); // "hello"
"hello".repeat(3); // "hellohellohello"
"hello".replace("l", "L"); // "heLlo"
"hello".replaceAll("l", "L"); // "heLLo"
"a,b,c".split(","); // ["a", "b", "c"]
"hello".padStart(10, "*"); // "*****hello"
"hello".padEnd(10, "*"); // "hello*****"
```

**4. Boolean**
```javascript
let isTrue = true;
let isFalse = false;

// Falsy values
Boolean(false); // false
Boolean(0); // false
Boolean(-0); // false
Boolean(0n); // false
Boolean(""); // false
Boolean(null); // false
Boolean(undefined); // false
Boolean(NaN); // false

// Truthy values
Boolean(true); // true
Boolean(1); // true
Boolean("hello"); // true
Boolean([]); // true
Boolean({}); // true
Boolean(function(){}); // true
```

**5. Undefined**
```javascript
let x;
console.log(x); // undefined

function test() {}
console.log(test()); // undefined

let obj = {};
console.log(obj.prop); // undefined
```

**6. Null**
```javascript
let empty = null;
console.log(empty); // null

// null vs undefined
null == undefined; // true
null === undefined; // false
typeof null; // "object" (bug in JS)
typeof undefined; // "undefined"
```

**7. Symbol**
```javascript
let sym1 = Symbol();
let sym2 = Symbol("description");
let sym3 = Symbol("description");

sym2 === sym3; // false (unique)

// Use case: unique object keys
let id = Symbol("id");
let user = {
    name: "John",
    [id]: 123
};

console.log(user[id]); // 123
console.log(Object.keys(user)); // ["name"] (symbol hidden)

// Well-known symbols
Symbol.iterator
Symbol.toStringTag
Symbol.toPrimitive
```

#### Reference Types

**1. Object**
```javascript
let obj = {
    name: "John",
    age: 30,
    "full name": "John Doe"
};

// Access
obj.name; // "John"
obj["age"]; // 30
obj["full name"]; // "John Doe"

// Add/Modify
obj.city = "NYC";
obj.age = 31;

// Delete
delete obj.city;

// Check property
"name" in obj; // true
obj.hasOwnProperty("name"); // true
```

**2. Array**
```javascript
let arr = [1, 2, 3, 4, 5];
let mixed = [1, "hello", true, null, {name: "John"}];

// Access
arr[0]; // 1
arr.length; // 5

// Modify
arr[0] = 10;
arr.push(6); // Add to end
arr.pop(); // Remove from end
arr.unshift(0); // Add to start
arr.shift(); // Remove from start
```

**3. Function**
```javascript
function greet(name) {
    return `Hello, ${name}!`;
}

let greet2 = function(name) {
    return `Hello, ${name}!`;
};

let greet3 = (name) => `Hello, ${name}!`;
```

### Type Checking
```javascript
typeof 42; // "number"
typeof "hello"; // "string"
typeof true; // "boolean"
typeof undefined; // "undefined"
typeof null; // "object" (bug)
typeof Symbol(); // "symbol"
typeof 10n; // "bigint"
typeof {}; // "object"
typeof []; // "object"
typeof function(){}; // "function"

// Better type checking
Array.isArray([]); // true
Object.prototype.toString.call([]); // "[object Array]"
```

### Type Conversion

**Implicit Conversion**
```javascript
"5" + 3; // "53" (string concatenation)
"5" - 3; // 2 (number subtraction)
"5" * "2"; // 10
"5" / "2"; // 2.5
"5" == 5; // true
"5" === 5; // false

true + 1; // 2
false + 1; // 1
"5" + true; // "5true"
```

**Explicit Conversion**
```javascript
// To String
String(123); // "123"
(123).toString(); // "123"
123 + ""; // "123"

// To Number
Number("123"); // 123
parseInt("123"); // 123
parseFloat("123.45"); // 123.45
+"123"; // 123

// To Boolean
Boolean(1); // true
!!"hello"; // true
```

---

## 3. Operators

### Arithmetic Operators
```javascript
let a = 10, b = 3;

a + b; // 13 (Addition)
a - b; // 7 (Subtraction)
a * b; // 30 (Multiplication)
a / b; // 3.333... (Division)
a % b; // 1 (Modulus/Remainder)
a ** b; // 1000 (Exponentiation)

// Increment/Decrement
let x = 5;
x++; // Post-increment: x = 6
++x; // Pre-increment: x = 7
x--; // Post-decrement: x = 6
--x; // Pre-decrement: x = 5
```

### Assignment Operators
```javascript
let x = 10;

x += 5; // x = x + 5 (15)
x -= 3; // x = x - 3 (12)
x *= 2; // x = x * 2 (24)
x /= 4; // x = x / 4 (6)
x %= 4; // x = x % 4 (2)
x **= 3; // x = x ** 3 (8)

// Logical assignment (ES2021)
x ||= 10; // x = x || 10
x &&= 5; // x = x && 5
x ??= 20; // x = x ?? 20
```

### Comparison Operators
```javascript
let a = 5, b = 10;

a == b; // false (Equal value)
a === b; // false (Equal value and type)
a != b; // true (Not equal value)
a !== b; // true (Not equal value or type)
a > b; // false (Greater than)
a < b; // true (Less than)
a >= b; // false (Greater than or equal)
a <= b; // true (Less than or equal)

// Type coercion
5 == "5"; // true
5 === "5"; // false
null == undefined; // true
null === undefined; // false
```

### Logical Operators
```javascript
let a = true, b = false;

a && b; // false (AND)
a || b; // true (OR)
!a; // false (NOT)

// Short-circuit evaluation
let result = a && expensiveFunction(); // Only runs if a is true
let value = a || defaultValue; // Returns a if truthy, else defaultValue

// Nullish coalescing (ES2020)
let x = null;
let y = x ?? "default"; // "default" (only null/undefined)
let z = 0 ?? "default"; // 0 (0 is not null/undefined)
```

### Bitwise Operators
```javascript
let a = 5; // 0101
let b = 3; // 0011

a & b; // 1 (0001) AND
a | b; // 7 (0111) OR
a ^ b; // 6 (0110) XOR
~a; // -6 (1010) NOT
a << 1; // 10 (1010) Left shift
a >> 1; // 2 (0010) Right shift
a >>> 1; // 2 (0010) Unsigned right shift
```

### Ternary Operator
```javascript
let age = 18;
let canVote = age >= 18 ? "Yes" : "No";

// Nested ternary
let score = 85;
let grade = score >= 90 ? "A" :
            score >= 80 ? "B" :
            score >= 70 ? "C" : "F";
```

### Comma Operator
```javascript
let a = (1, 2, 3); // a = 3 (returns last value)

for (let i = 0, j = 10; i < j; i++, j--) {
    console.log(i, j);
}
```

### typeof Operator
```javascript
typeof 42; // "number"
typeof "hello"; // "string"
typeof true; // "boolean"
typeof undefined; // "undefined"
typeof null; // "object" (bug)
typeof {}; // "object"
typeof []; // "object"
typeof function(){}; // "function"
```

### instanceof Operator
```javascript
let arr = [];
arr instanceof Array; // true
arr instanceof Object; // true

let date = new Date();
date instanceof Date; // true
date instanceof Object; // true
```

### Optional Chaining (?.)
```javascript
let user = {
    name: "John",
    address: {
        city: "NYC"
    }
};

user?.name; // "John"
user?.address?.city; // "NYC"
user?.contact?.phone; // undefined (no error)

// With functions
user.greet?.(); // undefined (no error if greet doesn't exist)

// With arrays
let arr = null;
arr?.[0]; // undefined (no error)
```

### Spread Operator (...)
```javascript
// Arrays
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

// Objects
let obj1 = {a: 1, b: 2};
let obj2 = {...obj1, c: 3}; // {a: 1, b: 2, c: 3}

// Function arguments
function sum(a, b, c) {
    return a + b + c;
}
sum(...[1, 2, 3]); // 6
```

### Rest Operator (...)
```javascript
// Function parameters
function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}
sum(1, 2, 3, 4); // 10

// Destructuring
let [first, ...rest] = [1, 2, 3, 4];
// first = 1, rest = [2, 3, 4]

let {a, ...others} = {a: 1, b: 2, c: 3};
// a = 1, others = {b: 2, c: 3}
```

---

## 4. Control Flow

### if...else Statement
```javascript
let age = 18;

if (age >= 18) {
    console.log("Adult");
} else if (age >= 13) {
    console.log("Teenager");
} else {
    console.log("Child");
}

// Single line (no braces)
if (age >= 18) console.log("Adult");
```

### switch Statement
```javascript
let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of week");
        break;
    case "Friday":
        console.log("End of week");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Weekend");
        break;
    default:
        console.log("Midweek");
}

// Without break (fall-through)
let grade = "B";
switch (grade) {
    case "A":
    case "B":
        console.log("Good"); // Executes for both A and B
        break;
    case "C":
        console.log("Average");
        break;
}
```

### for Loop
```javascript
// Standard for loop
for (let i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
}

// Multiple variables
for (let i = 0, j = 10; i < j; i++, j--) {
    console.log(i, j);
}

// Infinite loop
for (;;) {
    // break to exit
}
```

### while Loop
```javascript
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// Infinite loop
while (true) {
    // break to exit
}
```

### do...while Loop
```javascript
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);

// Executes at least once
let x = 10;
do {
    console.log(x); // Prints 10
} while (x < 5);
```

### for...in Loop (Objects)
```javascript
let person = {
    name: "John",
    age: 30,
    city: "NYC"
};

for (let key in person) {
    console.log(key, person[key]);
}
// name John
// age 30
// city NYC

// Arrays (not recommended)
let arr = [10, 20, 30];
for (let index in arr) {
    console.log(index, arr[index]); // 0 10, 1 20, 2 30
}
```

### for...of Loop (Iterables)
```javascript
// Arrays
let arr = [10, 20, 30];
for (let value of arr) {
    console.log(value); // 10, 20, 30
}

// Strings
for (let char of "hello") {
    console.log(char); // h, e, l, l, o
}

// Maps
let map = new Map([["a", 1], ["b", 2]]);
for (let [key, value] of map) {
    console.log(key, value);
}

// Sets
let set = new Set([1, 2, 3]);
for (let value of set) {
    console.log(value);
}
```

### break and continue
```javascript
// break - exit loop
for (let i = 0; i < 10; i++) {
    if (i === 5) break;
    console.log(i); // 0, 1, 2, 3, 4
}

// continue - skip iteration
for (let i = 0; i < 5; i++) {
    if (i === 2) continue;
    console.log(i); // 0, 1, 3, 4
}

// Labeled statements
outer: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) break outer;
        console.log(i, j);
    }
}
```

---

## 5. Functions

### Function Declaration
```javascript
function greet(name) {
    return `Hello, ${name}!`;
}

greet("John"); // "Hello, John!"

// Hoisted - can call before declaration
sayHi(); // Works
function sayHi() {
    console.log("Hi!");
}
```

### Function Expression
```javascript
const greet = function(name) {
    return `Hello, ${name}!`;
};

greet("Jane"); // "Hello, Jane!"

// Not hoisted
// sayHi(); // Error
const sayHi = function() {
    console.log("Hi!");
};
```

### Arrow Functions
```javascript
// Basic syntax
const greet = (name) => {
    return `Hello, ${name}!`;
};

// Concise syntax (implicit return)
const greet2 = name => `Hello, ${name}!`;

// Multiple parameters
const add = (a, b) => a + b;

// No parameters
const sayHi = () => "Hi!";

// Returning object (wrap in parentheses)
const getPerson = () => ({name: "John", age: 30});

// Arrow functions don't have their own 'this'
const obj = {
    name: "John",
    greet: function() {
        setTimeout(() => {
            console.log(this.name); // "John" (inherits this)
        }, 1000);
    }
};
```

### Parameters

**Default Parameters**
```javascript
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}

greet(); // "Hello, Guest!"
greet("John"); // "Hello, John!"

// Expression as default
function multiply(a, b = a * 2) {
    return a * b;
}
```

**Rest Parameters**
```javascript
function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}

sum(1, 2, 3, 4); // 10

function greet(greeting, ...names) {
    return `${greeting} ${names.join(", ")}!`;
}
greet("Hello", "John", "Jane", "Bob"); // "Hello John, Jane, Bob!"
```

**Destructuring Parameters**
```javascript
function greet({name, age}) {
    return `${name} is ${age} years old`;
}

greet({name: "John", age: 30}); // "John is 30 years old"

// Array destructuring
function sum([a, b]) {
    return a + b;
}
sum([5, 10]); // 15
```

### Return Statement
```javascript
function add(a, b) {
    return a + b;
}

// Multiple return points
function getGrade(score) {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    return "F";
}

// No return = undefined
function test() {
    console.log("test");
}
test(); // undefined
```

### IIFE (Immediately Invoked Function Expression)
```javascript
(function() {
    console.log("IIFE executed");
})();

// With parameters
(function(name) {
    console.log(`Hello, ${name}!`);
})("John");

// Arrow IIFE
(() => {
    console.log("Arrow IIFE");
})();

// Use case: Private scope
const counter = (function() {
    let count = 0;
    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count
    };
})();

counter.increment(); // 1
counter.getCount(); // 1
```

### Higher-Order Functions
```javascript
// Function that takes a function as argument
function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}

repeat(3, console.log); // 0, 1, 2

// Function that returns a function
function multiplier(factor) {
    return number => number * factor;
}

const double = multiplier(2);
const triple = multiplier(3);

double(5); // 10
triple(5); // 15
```

### Callback Functions
```javascript
function fetchData(callback) {
    setTimeout(() => {
        const data = {name: "John", age: 30};
        callback(data);
    }, 1000);
}

fetchData((data) => {
    console.log(data);
});

// Array methods with callbacks
[1, 2, 3].forEach(num => console.log(num));
[1, 2, 3].map(num => num * 2); // [2, 4, 6]
[1, 2, 3].filter(num => num > 1); // [2, 3]
```

### Recursion
```javascript
// Factorial
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

factorial(5); // 120

// Fibonacci
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

fibonacci(6); // 8

// Countdown
function countdown(n) {
    if (n < 0) return;
    console.log(n);
    countdown(n - 1);
}
```

### Closures
```javascript
function outer() {
    let count = 0;

    function inner() {
        count++;
        console.log(count);
    }

    return inner;
}

const counter = outer();
counter(); // 1
counter(); // 2
counter(); // 3

// Practical example
function createGreeter(greeting) {
    return function(name) {
        return `${greeting}, ${name}!`;
    };
}

const sayHello = createGreeter("Hello");
const sayHi = createGreeter("Hi");

sayHello("John"); // "Hello, John!"
sayHi("Jane"); // "Hi, Jane!"
```

---

## 6. Objects

### Creating Objects

**Object Literal**
```javascript
let person = {
    name: "John",
    age: 30,
    city: "NYC",
    greet: function() {
        return `Hello, I'm ${this.name}`;
    }
};
```

**Object Constructor**
```javascript
let person = new Object();
person.name = "John";
person.age = 30;
```

**Object.create()**
```javascript
let personProto = {
    greet: function() {
        return `Hello, I'm ${this.name}`;
    }
};

let person = Object.create(personProto);
person.name = "John";
person.age = 30;
```

**Constructor Function**
```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        return `Hello, I'm ${this.name}`;
    };
}

let john = new Person("John", 30);
```

**Class (ES6)**
```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, I'm ${this.name}`;
    }
}

let john = new Person("John", 30);
```

### Accessing Properties
```javascript
let person = {
    name: "John",
    age: 30,
    "full name": "John Doe"
};

// Dot notation
person.name; // "John"
person.age; // 30

// Bracket notation
person["name"]; // "John"
person["full name"]; // "John Doe"

// Dynamic access
let prop = "age";
person[prop]; // 30
```

### Adding/Modifying Properties
```javascript
let person = {name: "John"};

// Add
person.age = 30;
person["city"] = "NYC";

// Modify
person.name = "Jane";

// Computed property names
let key = "email";
person[key] = "john@example.com";
```

### Deleting Properties
```javascript
let person = {
    name: "John",
    age: 30,
    city: "NYC"
};

delete person.city;
console.log(person); // {name: "John", age: 30}
```

### Object Methods

**Object.keys()**
```javascript
let person = {name: "John", age: 30};
Object.keys(person); // ["name", "age"]
```

**Object.values()**
```javascript
Object.values(person); // ["John", 30]
```

**Object.entries()**
```javascript
Object.entries(person); // [["name", "John"], ["age", 30]]

// Iterate
for (let [key, value] of Object.entries(person)) {
    console.log(key, value);
}
```

**Object.assign()**
```javascript
let target = {a: 1};
let source = {b: 2, c: 3};
Object.assign(target, source); // {a: 1, b: 2, c: 3}

// Clone object
let clone = Object.assign({}, person);

// Merge objects
let merged = Object.assign({}, obj1, obj2, obj3);
```

**Object.freeze()**
```javascript
let person = {name: "John", age: 30};
Object.freeze(person);

person.age = 31; // Ignored (strict mode: error)
person.city = "NYC"; // Ignored
delete person.name; // Ignored

Object.isFrozen(person); // true
```

**Object.seal()**
```javascript
let person = {name: "John", age: 30};
Object.seal(person);

person.age = 31; // Works (can modify)
person.city = "NYC"; // Ignored (can't add)
delete person.name; // Ignored (can't delete)

Object.isSealed(person); // true
```

**Object.preventExtensions()**
```javascript
let person = {name: "John"};
Object.preventExtensions(person);

person.age = 30; // Ignored (can't add)
person.name = "Jane"; // Works (can modify)
delete person.name; // Works (can delete)
```

**Object.hasOwnProperty()**
```javascript
let person = {name: "John"};
person.hasOwnProperty("name"); // true
person.hasOwnProperty("toString"); // false (inherited)
```

**Object.getOwnPropertyNames()**
```javascript
let person = {name: "John", age: 30};
Object.getOwnPropertyNames(person); // ["name", "age"]
```

### Property Descriptors
```javascript
let person = {name: "John"};

// Get descriptor
Object.getOwnPropertyDescriptor(person, "name");
// {value: "John", writable: true, enumerable: true, configurable: true}

// Define property
Object.defineProperty(person, "age", {
    value: 30,
    writable: false, // Can't modify
    enumerable: true, // Shows in for...in
    configurable: false // Can't delete or reconfigure
});

person.age = 31; // Ignored
delete person.age; // Ignored

// Define multiple properties
Object.defineProperties(person, {
    city: {
        value: "NYC",
        writable: true
    },
    country: {
        value: "USA",
        writable: false
    }
});
```

### Getters and Setters
```javascript
let person = {
    firstName: "John",
    lastName: "Doe",

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    set fullName(value) {
        [this.firstName, this.lastName] = value.split(" ");
    }
};

person.fullName; // "John Doe"
person.fullName = "Jane Smith";
person.firstName; // "Jane"
person.lastName; // "Smith"

// Using Object.defineProperty
Object.defineProperty(person, "age", {
    get() {
        return this._age;
    },
    set(value) {
        if (value < 0) throw new Error("Age cannot be negative");
        this._age = value;
    }
});
```

### this Keyword
```javascript
let person = {
    name: "John",
    greet: function() {
        console.log(this.name); // "John"
    },

    // Arrow function doesn't have own 'this'
    greetArrow: () => {
        console.log(this.name); // undefined (or global)
    }
};

// Method call
person.greet(); // this = person

// Function call
let greet = person.greet;
greet(); // this = undefined (strict) or global

// Constructor
function Person(name) {
    this.name = name; // this = new object
}

// Event handler
button.addEventListener('click', function() {
    console.log(this); // this = button
});
```

### Destructuring Objects
```javascript
let person = {
    name: "John",
    age: 30,
    city: "NYC"
};

// Basic
let {name, age} = person;

// Rename
let {name: personName, age: personAge} = person;

// Default values
let {name, country = "USA"} = person;

// Nested
let user = {
    id: 1,
    info: {
        name: "John",
        age: 30
    }
};

let {info: {name, age}} = user;

// Rest
let {name, ...rest} = person;
// name = "John", rest = {age: 30, city: "NYC"}
```

### Shorthand Properties
```javascript
let name = "John";
let age = 30;

// Old way
let person = {
    name: name,
    age: age
};

// Shorthand
let person2 = {name, age};

// Method shorthand
let obj = {
    // Old way
    greet: function() {
        return "Hello";
    },

    // Shorthand
    sayHi() {
        return "Hi";
    }
};
```

### Computed Property Names
```javascript
let key = "name";
let person = {
    [key]: "John",
    ["age"]: 30,
    [`full${key}`]: "John Doe"
};

// person = {name: "John", age: 30, fullname: "John Doe"}
```

---

## 7. Arrays

### Creating Arrays
```javascript
// Array literal
let arr = [1, 2, 3, 4, 5];

// Array constructor
let arr2 = new Array(1, 2, 3);
let arr3 = new Array(5); // Empty array with length 5

// Array.of()
let arr4 = Array.of(1, 2, 3); // [1, 2, 3]
let arr5 = Array.of(5); // [5] (not empty array)

// Array.from()
let arr6 = Array.from("hello"); // ["h", "e", "l", "l", "o"]
let arr7 = Array.from({length: 5}, (_, i) => i); // [0, 1, 2, 3, 4]
```

### Accessing Elements
```javascript
let arr = [10, 20, 30, 40, 50];

arr[0]; // 10 (first element)
arr[2]; // 30
arr[arr.length - 1]; // 50 (last element)
arr.at(-1); // 50 (ES2022)
arr.at(-2); // 40
```

### Array Methods

**Mutating Methods (modify original array)**

**push() - Add to end**
```javascript
let arr = [1, 2, 3];
arr.push(4); // Returns 4 (new length)
// arr = [1, 2, 3, 4]

arr.push(5, 6, 7); // Add multiple
// arr = [1, 2, 3, 4, 5, 6, 7]
```

**pop() - Remove from end**
```javascript
let arr = [1, 2, 3];
let last = arr.pop(); // Returns 3
// arr = [1, 2]
```

**unshift() - Add to start**
```javascript
let arr = [2, 3];
arr.unshift(1); // Returns 3 (new length)
// arr = [1, 2, 3]

arr.unshift(-1, 0); // Add multiple
// arr = [-1, 0, 1, 2, 3]
```

**shift() - Remove from start**
```javascript
let arr = [1, 2, 3];
let first = arr.shift(); // Returns 1
// arr = [2, 3]
```

**splice() - Add/Remove elements**
```javascript
let arr = [1, 2, 3, 4, 5];

// Remove elements
arr.splice(2, 2); // Remove 2 elements from index 2
// arr = [1, 2, 5], returns [3, 4]

// Add elements
arr.splice(2, 0, 3, 4); // Add at index 2
// arr = [1, 2, 3, 4, 5]

// Replace elements
arr.splice(1, 2, 10, 20); // Remove 2, add 2
// arr = [1, 10, 20, 4, 5]
```

**sort() - Sort array**
```javascript
let arr = [3, 1, 4, 1, 5];
arr.sort(); // [1, 1, 3, 4, 5]

// Custom comparator
let nums = [10, 5, 40, 25];
nums.sort((a, b) => a - b); // [5, 10, 25, 40] (ascending)
nums.sort((a, b) => b - a); // [40, 25, 10, 5] (descending)

// Sort objects
let people = [
    {name: "John", age: 30},
    {name: "Jane", age: 25},
    {name: "Bob", age: 35}
];
people.sort((a, b) => a.age - b.age); // Sort by age
```

**reverse() - Reverse array**
```javascript
let arr = [1, 2, 3, 4, 5];
arr.reverse(); // [5, 4, 3, 2, 1]
```

**fill() - Fill with value**
```javascript
let arr = [1, 2, 3, 4, 5];
arr.fill(0); // [0, 0, 0, 0, 0]

arr.fill(7, 2, 4); // Fill from index 2 to 4
// [0, 0, 7, 7, 0]
```

**Non-Mutating Methods (return new array)**

**concat() - Merge arrays**
```javascript
let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = arr1.concat(arr2); // [1, 2, 3, 4]
let arr4 = arr1.concat(arr2, [5, 6]); // [1, 2, 3, 4, 5, 6]

// Using spread
let arr5 = [...arr1, ...arr2]; // [1, 2, 3, 4]
```

**slice() - Extract portion**
```javascript
let arr = [1, 2, 3, 4, 5];
arr.slice(1, 3); // [2, 3] (from index 1 to 3)
arr.slice(2); // [3, 4, 5] (from index 2 to end)
arr.slice(-2); // [4, 5] (last 2 elements)
arr.slice(); // [1, 2, 3, 4, 5] (shallow copy)
```

**join() - Convert to string**
```javascript
let arr = ["Hello", "World"];
arr.join(); // "Hello,World"
arr.join(" "); // "Hello World"
arr.join("-"); // "Hello-World"
```

**toString() - Convert to string**
```javascript
let arr = [1, 2, 3];
arr.toString(); // "1,2,3"
```

**Iteration Methods**

**forEach() - Iterate**
```javascript
let arr = [1, 2, 3];
arr.forEach((value, index, array) => {
    console.log(value, index);
});
// 1 0
// 2 1
// 3 2
```

**map() - Transform elements**
```javascript
let arr = [1, 2, 3, 4, 5];
let doubled = arr.map(x => x * 2); // [2, 4, 6, 8, 10]

let people = [{name: "John"}, {name: "Jane"}];
let names = people.map(p => p.name); // ["John", "Jane"]
```

**filter() - Filter elements**
```javascript
let arr = [1, 2, 3, 4, 5];
let evens = arr.filter(x => x % 2 === 0); // [2, 4]

let people = [
    {name: "John", age: 30},
    {name: "Jane", age: 25},
    {name: "Bob", age: 35}
];
let adults = people.filter(p => p.age >= 30);
```

**reduce() - Reduce to single value**
```javascript
let arr = [1, 2, 3, 4, 5];

// Sum
let sum = arr.reduce((acc, val) => acc + val, 0); // 15

// Product
let product = arr.reduce((acc, val) => acc * val, 1); // 120

// Max
let max = arr.reduce((acc, val) => Math.max(acc, val)); // 5

// Group by
let people = [
    {name: "John", age: 30},
    {name: "Jane", age: 25},
    {name: "Bob", age: 30}
];

let grouped = people.reduce((acc, person) => {
    let age = person.age;
    if (!acc[age]) acc[age] = [];
    acc[age].push(person);
    return acc;
}, {});
// {25: [{name: "Jane", age: 25}], 30: [{name: "John", age: 30}, {name: "Bob", age: 30}]}
```

**reduceRight() - Reduce from right**
```javascript
let arr = [1, 2, 3, 4, 5];
let result = arr.reduceRight((acc, val) => acc - val); // 5-4-3-2-1 = -5
```

**find() - Find first match**
```javascript
let arr = [1, 2, 3, 4, 5];
let found = arr.find(x => x > 3); // 4

let people = [{name: "John", age: 30}, {name: "Jane", age: 25}];
let person = people.find(p => p.name === "Jane"); // {name: "Jane", age: 25}
```

**findIndex() - Find index of first match**
```javascript
let arr = [1, 2, 3, 4, 5];
let index = arr.findIndex(x => x > 3); // 3

let people = [{name: "John"}, {name: "Jane"}];
let idx = people.findIndex(p => p.name === "Jane"); // 1
```

**findLast() - Find last match (ES2023)**
```javascript
let arr = [1, 2, 3, 4, 5];
let found = arr.findLast(x => x > 3); // 5
```

**findLastIndex() - Find last index (ES2023)**
```javascript
let arr = [1, 2, 3, 4, 5];
let index = arr.findLastIndex(x => x > 3); // 4
```

**some() - Check if any match**
```javascript
let arr = [1, 2, 3, 4, 5];
arr.some(x => x > 3); // true
arr.some(x => x > 10); // false
```

**every() - Check if all match**
```javascript
let arr = [1, 2, 3, 4, 5];
arr.every(x => x > 0); // true
arr.every(x => x > 3); // false
```

**includes() - Check if contains**
```javascript
let arr = [1, 2, 3, 4, 5];
arr.includes(3); // true
arr.includes(10); // false
arr.includes(3, 3); // false (start from index 3)
```

**indexOf() - Find index**
```javascript
let arr = [1, 2, 3, 2, 1];
arr.indexOf(2); // 1 (first occurrence)
arr.indexOf(2, 2); // 3 (start from index 2)
arr.indexOf(10); // -1 (not found)
```

**lastIndexOf() - Find last index**
```javascript
let arr = [1, 2, 3, 2, 1];
arr.lastIndexOf(2); // 3 (last occurrence)
arr.lastIndexOf(2, 2); // 1 (search backwards from index 2)
```

**flat() - Flatten array**
```javascript
let arr = [1, [2, 3], [4, [5, 6]]];
arr.flat(); // [1, 2, 3, 4, [5, 6]] (1 level)
arr.flat(2); // [1, 2, 3, 4, 5, 6] (2 levels)
arr.flat(Infinity); // [1, 2, 3, 4, 5, 6] (all levels)
```

**flatMap() - Map then flatten**
```javascript
let arr = [1, 2, 3];
arr.flatMap(x => [x, x * 2]); // [1, 2, 2, 4, 3, 6]

let sentences = ["Hello world", "How are you"];
sentences.flatMap(s => s.split(" ")); // ["Hello", "world", "How", "are", "you"]
```

### Array Destructuring
```javascript
let arr = [1, 2, 3, 4, 5];

// Basic
let [first, second] = arr; // first = 1, second = 2

// Skip elements
let [a, , c] = arr; // a = 1, c = 3

// Rest
let [x, ...rest] = arr; // x = 1, rest = [2, 3, 4, 5]

// Default values
let [p, q, r = 0] = [1, 2]; // p = 1, q = 2, r = 0

// Swapping
let a = 1, b = 2;
[a, b] = [b, a]; // a = 2, b = 1

// Nested
let nested = [1, [2, 3], 4];
let [n1, [n2, n3], n4] = nested;
```

### Spread Operator with Arrays
```javascript
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

// Combine arrays
let combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

// Copy array
let copy = [...arr1]; // [1, 2, 3]

// Add elements
let extended = [0, ...arr1, 4]; // [0, 1, 2, 3, 4]

// Function arguments
Math.max(...arr1); // 3
```

---

## 8. Strings

### String Methods

**charAt() - Get character**
```javascript
let str = "Hello";
str.charAt(0); // "H"
str.charAt(4); // "o"
str[0]; // "H" (bracket notation)
```

**charCodeAt() - Get character code**
```javascript
let str = "Hello";
str.charCodeAt(0); // 72 (H)
str.charCodeAt(1); // 101 (e)
```

**concat() - Concatenate**
```javascript
let str1 = "Hello";
let str2 = "World";
str1.concat(" ", str2); // "Hello World"

// Better: use template literals or +
`${str1} ${str2}`; // "Hello World"
str1 + " " + str2; // "Hello World"
```

**includes() - Check if contains**
```javascript
let str = "Hello World";
str.includes("World"); // true
str.includes("world"); // false (case-sensitive)
str.includes("o", 5); // true (start from index 5)
```

**startsWith() - Check if starts with**
```javascript
let str = "Hello World";
str.startsWith("Hello"); // true
str.startsWith("World", 6); // true (start from index 6)
```

**endsWith() - Check if ends with**
```javascript
let str = "Hello World";
str.endsWith("World"); // true
str.endsWith("Hello", 5); // true (check first 5 chars)
```

**indexOf() - Find index**
```javascript
let str = "Hello World";
str.indexOf("o"); // 4 (first occurrence)
str.indexOf("o", 5); // 7 (start from index 5)
str.indexOf("x"); // -1 (not found)
```

**lastIndexOf() - Find last index**
```javascript
let str = "Hello World";
str.lastIndexOf("o"); // 7 (last occurrence)
str.lastIndexOf("o", 5); // 4 (search backwards from index 5)
```

**slice() - Extract substring**
```javascript
let str = "Hello World";
str.slice(0, 5); // "Hello"
str.slice(6); // "World"
str.slice(-5); // "World" (last 5 chars)
str.slice(-5, -1); // "Worl"
```

**substring() - Extract substring**
```javascript
let str = "Hello World";
str.substring(0, 5); // "Hello"
str.substring(6); // "World"
// Negative values treated as 0
str.substring(-5); // "Hello World"
```

**substr() - Extract substring (deprecated)**
```javascript
let str = "Hello World";
str.substr(0, 5); // "Hello"
str.substr(6, 5); // "World"
str.substr(-5); // "World"
```

**split() - Split into array**
```javascript
let str = "Hello World";
str.split(" "); // ["Hello", "World"]
str.split(""); // ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]
str.split(" ", 1); // ["Hello"] (limit)

let csv = "a,b,c";
csv.split(","); // ["a", "b", "c"]
```

**replace() - Replace first match**
```javascript
let str = "Hello World";
str.replace("World", "JavaScript"); // "Hello JavaScript"
str.replace("o", "0"); // "Hell0 World" (first occurrence)

// With regex
str.replace(/o/g, "0"); // "Hell0 W0rld" (all occurrences)
str.replace(/world/i, "JS"); // "Hello JS" (case-insensitive)
```

**replaceAll() - Replace all matches**
```javascript
let str = "Hello World";
str.replaceAll("o", "0"); // "Hell0 W0rld"
str.replaceAll(/o/g, "0"); // "Hell0 W0rld"
```

**toUpperCase() - Convert to uppercase**
```javascript
let str = "Hello World";
str.toUpperCase(); // "HELLO WORLD"
```

**toLowerCase() - Convert to lowercase**
```javascript
let str = "Hello World";
str.toLowerCase(); // "hello world"
```

**trim() - Remove whitespace**
```javascript
let str = "  Hello World  ";
str.trim(); // "Hello World"
str.trimStart(); // "Hello World  "
str.trimEnd(); // "  Hello World"
```

**padStart() - Pad from start**
```javascript
let str = "5";
str.padStart(3, "0"); // "005"
str.padStart(5, "*"); // "****5"
```

**padEnd() - Pad from end**
```javascript
let str = "5";
str.padEnd(3, "0"); // "500"
str.padEnd(5, "*"); // "5****"
```

**repeat() - Repeat string**
```javascript
let str = "Ha";
str.repeat(3); // "HaHaHa"
```

**match() - Match regex**
```javascript
let str = "Hello World";
str.match(/o/g); // ["o", "o"]
str.match(/o/); // ["o", index: 4, input: "Hello World"]
```

**matchAll() - Match all regex**
```javascript
let str = "test1 test2";
let matches = [...str.matchAll(/test(\d)/g)];
// [[match, group1], [match, group1]]
```

**search() - Search regex**
```javascript
let str = "Hello World";
str.search(/World/); // 6 (index)
str.search(/world/i); // 6 (case-insensitive)
str.search(/xyz/); // -1 (not found)
```

**localeCompare() - Compare strings**
```javascript
"a".localeCompare("b"); // -1 (a < b)
"b".localeCompare("a"); // 1 (b > a)
"a".localeCompare("a"); // 0 (equal)
```

### Template Literals
```javascript
let name = "John";
let age = 30;

// Basic
let message = `Hello, ${name}!`;

// Expressions
let result = `2 + 2 = ${2 + 2}`;

// Multi-line
let multiLine = `
    Line 1
    Line 2
    Line 3
`;

// Nested
let nested = `Outer ${`Inner ${name}`}`;

// Tagged templates
function tag(strings, ...values) {
    console.log(strings); // ["Hello ", "!"]
    console.log(values); // ["John"]
    return strings[0] + values[0].toUpperCase() + strings[1];
}

tag`Hello ${name}!`; // "Hello JOHN!"
```

---

## 9. ES6+ Features

### let and const
```javascript
// Block-scoped
{
    let x = 10;
    const y = 20;
}
// console.log(x); // Error

// const requires initialization
// const z; // Error

// const object properties can be modified
const obj = {name: "John"};
obj.name = "Jane"; // OK
// obj = {}; // Error
```

### Arrow Functions
```javascript
// Traditional
function add(a, b) {
    return a + b;
}

// Arrow
const add = (a, b) => a + b;

// No 'this' binding
const obj = {
    name: "John",
    greet: function() {
        setTimeout(() => {
            console.log(this.name); // "John"
        }, 1000);
    }
};
```

### Destructuring
```javascript
// Array
let [a, b, c] = [1, 2, 3];

// Object
let {name, age} = {name: "John", age: 30};

// Function parameters
function greet({name, age}) {
    return `${name} is ${age}`;
}
```

### Default Parameters
```javascript
function greet(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

greet(); // "Hello, Guest!"
greet("John"); // "Hello, John!"
greet("Jane", "Hi"); // "Hi, Jane!"
```

### Rest Parameters
```javascript
function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}

sum(1, 2, 3, 4); // 10
```

### Spread Operator
```javascript
// Arrays
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

// Objects
let obj1 = {a: 1, b: 2};
let obj2 = {...obj1, c: 3}; // {a: 1, b: 2, c: 3}

// Function calls
Math.max(...[1, 2, 3]); // 3
```

### Template Literals
```javascript
let name = "John";
let age = 30;

let message = `My name is ${name} and I'm ${age} years old`;

// Multi-line
let html = `
    <div>
        <h1>${name}</h1>
        <p>Age: ${age}</p>
    </div>
`;
```

### Enhanced Object Literals
```javascript
let name = "John";
let age = 30;

// Shorthand properties
let person = {name, age};

// Shorthand methods
let obj = {
    greet() {
        return "Hello";
    }
};

// Computed property names
let key = "name";
let person2 = {
    [key]: "John",
    [`get${key}`]() {
        return this[key];
    }
};
```

### Classes
```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, I'm ${this.name}`;
    }

    static species() {
        return "Homo sapiens";
    }
}

let john = new Person("John", 30);
john.greet(); // "Hello, I'm John"
Person.species(); // "Homo sapiens"

// Inheritance
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }

    study() {
        return `${this.name} is studying`;
    }
}

let student = new Student("Jane", 20, "A");
student.greet(); // "Hello, I'm Jane"
student.study(); // "Jane is studying"
```

### Modules (ES6)
```javascript
// export.js
export const PI = 3.14159;
export function add(a, b) {
    return a + b;
}

export default class Calculator {
    multiply(a, b) {
        return a * b;
    }
}

// import.js
import Calculator, {PI, add} from './export.js';
import * as math from './export.js';

console.log(PI); // 3.14159
add(2, 3); // 5
let calc = new Calculator();
```

### Promises
```javascript
// Creating a promise
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Success!");
    }, 1000);
});

// Using a promise
promise
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => console.log("Done"));

// Promise.all
Promise.all([promise1, promise2, promise3])
    .then(results => console.log(results));

// Promise.race
Promise.race([promise1, promise2])
    .then(result => console.log(result));

// Promise.allSettled
Promise.allSettled([promise1, promise2])
    .then(results => console.log(results));

// Promise.any
Promise.any([promise1, promise2])
    .then(result => console.log(result));
```

### Async/Await
```javascript
async function fetchData() {
    try {
        let response = await fetch('https://api.example.com/data');
        let data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

// Using async/await
fetchData().then(data => console.log(data));

// Parallel execution
async function fetchMultiple() {
    let [data1, data2] = await Promise.all([
        fetch('url1').then(r => r.json()),
        fetch('url2').then(r => r.json())
    ]);
    return {data1, data2};
}
```

### Symbols
```javascript
let sym1 = Symbol();
let sym2 = Symbol("description");

// Unique
Symbol() === Symbol(); // false

// As object keys
let id = Symbol("id");
let user = {
    name: "John",
    [id]: 123
};

user[id]; // 123

// Well-known symbols
Symbol.iterator
Symbol.toStringTag
```

### Iterators and Generators
```javascript
// Iterator
let iterable = {
    data: [1, 2, 3],
    [Symbol.iterator]() {
        let index = 0;
        let data = this.data;

        return {
            next() {
                if (index < data.length) {
                    return {value: data[index++], done: false};
                } else {
                    return {done: true};
                }
            }
        };
    }
};

for (let value of iterable) {
    console.log(value); // 1, 2, 3
}

// Generator
function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

let gen = numberGenerator();
gen.next(); // {value: 1, done: false}
gen.next(); // {value: 2, done: false}
gen.next(); // {value: 3, done: false}
gen.next(); // {done: true}

// Generator with loop
function* fibonacci() {
    let [a, b] = [0, 1];
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

let fib = fibonacci();
fib.next().value; // 0
fib.next().value; // 1
fib.next().value; // 1
fib.next().value; // 2
```

### Map
```javascript
let map = new Map();

// Set values
map.set("name", "John");
map.set("age", 30);
map.set(1, "one");

// Get values
map.get("name"); // "John"
map.get(1); // "one"

// Check existence
map.has("name"); // true

// Delete
map.delete("age");

// Size
map.size; // 2

// Iterate
for (let [key, value] of map) {
    console.log(key, value);
}

// From array
let map2 = new Map([
    ["a", 1],
    ["b", 2]
]);

// Methods
map.keys(); // Iterator of keys
map.values(); // Iterator of values
map.entries(); // Iterator of [key, value]
map.clear(); // Remove all
```

### Set
```javascript
let set = new Set();

// Add values
set.add(1);
set.add(2);
set.add(2); // Duplicate ignored

// Check existence
set.has(1); // true

// Delete
set.delete(2);

// Size
set.size; // 1

// Iterate
for (let value of set) {
    console.log(value);
}

// From array
let set2 = new Set([1, 2, 3, 3, 4]); // Set {1, 2, 3, 4}

// Array to unique values
let arr = [1, 2, 2, 3, 3, 4];
let unique = [...new Set(arr)]; // [1, 2, 3, 4]

// Methods
set.values(); // Iterator
set.clear(); // Remove all
```

### WeakMap and WeakSet
```javascript
// WeakMap - keys must be objects, garbage collected
let weakMap = new WeakMap();
let obj = {name: "John"};

weakMap.set(obj, "metadata");
weakMap.get(obj); // "metadata"

// When obj is garbage collected, entry is removed

// WeakSet - values must be objects
let weakSet = new WeakSet();
weakSet.add(obj);
weakSet.has(obj); // true
```

### Proxy
```javascript
let target = {
    name: "John",
    age: 30
};

let handler = {
    get(target, prop) {
        console.log(`Getting ${prop}`);
        return target[prop];
    },
    set(target, prop, value) {
        console.log(`Setting ${prop} to ${value}`);
        target[prop] = value;
        return true;
    }
};

let proxy = new Proxy(target, handler);

proxy.name; // "Getting name", returns "John"
proxy.age = 31; // "Setting age to 31"
```

### Reflect
```javascript
let obj = {name: "John", age: 30};

// Get property
Reflect.get(obj, "name"); // "John"

// Set property
Reflect.set(obj, "age", 31);

// Has property
Reflect.has(obj, "name"); // true

// Delete property
Reflect.deleteProperty(obj, "age");

// Get keys
Reflect.ownKeys(obj); // ["name"]
```

---

## 10. Asynchronous JavaScript

### Callbacks
```javascript
function fetchData(callback) {
    setTimeout(() => {
        callback("Data loaded");
    }, 1000);
}

fetchData((data) => {
    console.log(data); // "Data loaded"
});

// Callback hell
getData((a) => {
    getMoreData(a, (b) => {
        getMoreData(b, (c) => {
            console.log(c);
        });
    });
});
```

### Promises
```javascript
// Creating a promise
let promise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Success!");
    } else {
        reject("Error!");
    }
});

// Consuming a promise
promise
    .then(result => {
        console.log(result);
        return "Next step";
    })
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    })
    .finally(() => {
        console.log("Cleanup");
    });

// Promise chaining
fetch('https://api.example.com/user')
    .then(response => response.json())
    .then(user => fetch(`https://api.example.com/posts/${user.id}`))
    .then(response => response.json())
    .then(posts => console.log(posts))
    .catch(error => console.error(error));
```

### Promise Methods
```javascript
// Promise.all - Wait for all
Promise.all([promise1, promise2, promise3])
    .then(([result1, result2, result3]) => {
        console.log(result1, result2, result3);
    })
    .catch(error => {
        // Fails if any promise rejects
        console.error(error);
    });

// Promise.race - First to settle
Promise.race([promise1, promise2])
    .then(result => {
        console.log(result); // First resolved
    });

// Promise.allSettled - Wait for all (ES2020)
Promise.allSettled([promise1, promise2, promise3])
    .then(results => {
        results.forEach(result => {
            if (result.status === 'fulfilled') {
                console.log(result.value);
            } else {
                console.error(result.reason);
            }
        });
    });

// Promise.any - First fulfilled (ES2021)
Promise.any([promise1, promise2, promise3])
    .then(result => {
        console.log(result); // First fulfilled
    })
    .catch(error => {
        // All rejected
        console.error(error);
    });

// Promise.resolve
Promise.resolve("value").then(v => console.log(v));

// Promise.reject
Promise.reject("error").catch(e => console.error(e));
```

### Async/Await
```javascript
// Basic async function
async function fetchData() {
    let response = await fetch('https://api.example.com/data');
    let data = await response.json();
    return data;
}

// Error handling
async function fetchDataSafe() {
    try {
        let response = await fetch('https://api.example.com/data');
        let data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

// Sequential execution
async function sequential() {
    let result1 = await operation1();
    let result2 = await operation2(result1);
    let result3 = await operation3(result2);
    return result3;
}

// Parallel execution
async function parallel() {
    let [result1, result2, result3] = await Promise.all([
        operation1(),
        operation2(),
        operation3()
    ]);
    return {result1, result2, result3};
}

// Async IIFE
(async () => {
    let data = await fetchData();
    console.log(data);
})();

// Async arrow function
const fetchUser = async (id) => {
    let response = await fetch(`/api/users/${id}`);
    return response.json();
};
```

### setTimeout and setInterval
```javascript
// setTimeout - Execute once after delay
let timeoutId = setTimeout(() => {
    console.log("Executed after 1 second");
}, 1000);

// Clear timeout
clearTimeout(timeoutId);

// setInterval - Execute repeatedly
let intervalId = setInterval(() => {
    console.log("Executed every 2 seconds");
}, 2000);

// Clear interval
clearInterval(intervalId);

// Countdown example
let count = 10;
let countdown = setInterval(() => {
    console.log(count--);
    if (count < 0) {
        clearInterval(countdown);
    }
}, 1000);
```

### Event Loop
```javascript
console.log("1");

setTimeout(() => {
    console.log("2");
}, 0);

Promise.resolve().then(() => {
    console.log("3");
});

console.log("4");

// Output: 1, 4, 3, 2
// Microtasks (Promises) execute before macrotasks (setTimeout)
```

---

## 11. DOM Manipulation

### Selecting Elements
```javascript
// By ID
let element = document.getElementById("myId");

// By class name
let elements = document.getElementsByClassName("myClass");

// By tag name
let divs = document.getElementsByTagName("div");

// Query selector (first match)
let element = document.querySelector(".myClass");
let element = document.querySelector("#myId");
let element = document.querySelector("div.myClass");

// Query selector all
let elements = document.querySelectorAll(".myClass");
let elements = document.querySelectorAll("div p");
```

### Creating and Modifying Elements
```javascript
// Create element
let div = document.createElement("div");
let text = document.createTextNode("Hello");

// Set content
div.textContent = "Hello World";
div.innerHTML = "<p>Hello</p>";

// Set attributes
div.id = "myDiv";
div.className = "container";
div.setAttribute("data-id", "123");

// Get attributes
div.getAttribute("data-id"); // "123"
div.hasAttribute("data-id"); // true
div.removeAttribute("data-id");

// Add to DOM
document.body.appendChild(div);
document.body.insertBefore(div, referenceNode);
parentElement.append(div); // Can append multiple
parentElement.prepend(div);

// Remove from DOM
div.remove();
parentElement.removeChild(div);

// Replace
parentElement.replaceChild(newNode, oldNode);
```

### Modifying Styles
```javascript
let element = document.querySelector("#myElement");

// Inline styles
element.style.color = "red";
element.style.backgroundColor = "blue";
element.style.fontSize = "20px";

// CSS classes
element.classList.add("active");
element.classList.remove("inactive");
element.classList.toggle("visible");
element.classList.contains("active"); // true
element.classList.replace("old", "new");

// Multiple classes
element.className = "class1 class2 class3";
```

### Traversing DOM
```javascript
let element = document.querySelector("#myElement");

// Parent
element.parentElement;
element.parentNode;

// Children
element.children; // HTMLCollection
element.childNodes; // NodeList (includes text nodes)
element.firstElementChild;
element.lastElementChild;
element.childElementCount;

// Siblings
element.nextElementSibling;
element.previousElementSibling;

// Closest ancestor
element.closest(".container");
```

### Element Properties
```javascript
let element = document.querySelector("#myElement");

// Dimensions
element.offsetWidth; // Width including border
element.offsetHeight; // Height including border
element.clientWidth; // Width excluding border
element.clientHeight; // Height excluding border
element.scrollWidth; // Full width including overflow
element.scrollHeight; // Full height including overflow

// Position
element.offsetTop;
element.offsetLeft;
element.getBoundingClientRect(); // {top, right, bottom, left, width, height}

// Scroll
element.scrollTop;
element.scrollLeft;
element.scrollTo(0, 100);
element.scrollIntoView();
```

---

## 12. Events

### Adding Event Listeners
```javascript
let button = document.querySelector("#myButton");

// addEventListener
button.addEventListener("click", function(event) {
    console.log("Button clicked!");
});

// Arrow function
button.addEventListener("click", (e) => {
    console.log(e.target);
});

// Named function
function handleClick(event) {
    console.log("Clicked!");
}
button.addEventListener("click", handleClick);

// Remove event listener
button.removeEventListener("click", handleClick);

// Event options
button.addEventListener("click", handler, {
    once: true, // Execute only once
    capture: false, // Bubbling phase
    passive: true // Won't call preventDefault
});
```

### Event Object
```javascript
element.addEventListener("click", (event) => {
    event.type; // "click"
    event.target; // Element that triggered event
    event.currentTarget; // Element with listener
    event.clientX; // Mouse X coordinate
    event.clientY; // Mouse Y coordinate
    event.pageX; // X relative to document
    event.pageY; // Y relative to document
    event.key; // Keyboard key
    event.keyCode; // Key code (deprecated)
    event.ctrlKey; // Ctrl key pressed
    event.shiftKey; // Shift key pressed
    event.altKey; // Alt key pressed

    event.preventDefault(); // Prevent default action
    event.stopPropagation(); // Stop bubbling
    event.stopImmediatePropagation(); // Stop other listeners
});
```

### Common Events
```javascript
// Mouse events
element.addEventListener("click", handler);
element.addEventListener("dblclick", handler);
element.addEventListener("mousedown", handler);
element.addEventListener("mouseup", handler);
element.addEventListener("mousemove", handler);
element.addEventListener("mouseenter", handler);
element.addEventListener("mouseleave", handler);
element.addEventListener("mouseover", handler);
element.addEventListener("mouseout", handler);

// Keyboard events
element.addEventListener("keydown", handler);
element.addEventListener("keyup", handler);
element.addEventListener("keypress", handler); // Deprecated

// Form events
form.addEventListener("submit", handler);
input.addEventListener("input", handler);
input.addEventListener("change", handler);
input.addEventListener("focus", handler);
input.addEventListener("blur", handler);

// Document events
document.addEventListener("DOMContentLoaded", handler);
window.addEventListener("load", handler);
window.addEventListener("resize", handler);
window.addEventListener("scroll", handler);
```

### Event Delegation
```javascript
// Instead of adding listener to each item
document.querySelector("#list").addEventListener("click", (e) => {
    if (e.target.matches(".list-item")) {
        console.log("Item clicked:", e.target.textContent);
    }
});
```

### Custom Events
```javascript
// Create custom event
let event = new CustomEvent("myEvent", {
    detail: {message: "Hello"},
    bubbles: true,
    cancelable: true
});

// Dispatch event
element.dispatchEvent(event);

// Listen for custom event
element.addEventListener("myEvent", (e) => {
    console.log(e.detail.message); // "Hello"
});
```

---

## 13. Error Handling

### try...catch
```javascript
try {
    // Code that might throw error
    let result = riskyOperation();
    console.log(result);
} catch (error) {
    // Handle error
    console.error(error.message);
    console.error(error.name);
    console.error(error.stack);
} finally {
    // Always executes
    console.log("Cleanup");
}
```

### Throwing Errors
```javascript
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero");
    }
    return a / b;
}

try {
    divide(10, 0);
} catch (error) {
    console.error(error.message); // "Division by zero"
}
```

### Error Types
```javascript
// Error
throw new Error("Generic error");

// SyntaxError
// eval("invalid code");

// ReferenceError
// console.log(undefinedVariable);

// TypeError
// null.toString();

// RangeError
// new Array(-1);

// URIError
// decodeURIComponent("%");

// Custom error
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

throw new ValidationError("Invalid input");
```

### Async Error Handling
```javascript
// Promises
promise
    .then(result => console.log(result))
    .catch(error => console.error(error));

// Async/await
async function fetchData() {
    try {
        let response = await fetch(url);
        let data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw error; // Re-throw if needed
    }
}
```

---

## 14. Modules

### ES6 Modules

**Exporting**
```javascript
// Named exports
export const PI = 3.14159;
export function add(a, b) {
    return a + b;
}
export class Calculator {
    multiply(a, b) {
        return a * b;
    }
}

// Export list
const name = "John";
const age = 30;
export {name, age};

// Rename exports
export {name as userName, age as userAge};

// Default export
export default class Person {
    constructor(name) {
        this.name = name;
    }
}

// Or
class Person {}
export default Person;
```

**Importing**
```javascript
// Named imports
import {PI, add} from './math.js';

// Rename imports
import {add as sum} from './math.js';

// Import all
import * as math from './math.js';
math.PI;
math.add(2, 3);

// Default import
import Person from './person.js';

// Mixed
import Person, {PI, add} from './module.js';

// Dynamic import
import('./module.js')
    .then(module => {
        module.doSomething();
    });

// Async dynamic import
async function loadModule() {
    let module = await import('./module.js');
    module.doSomething();
}
```

### CommonJS (Node.js)
```javascript
// Exporting
module.exports = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b
};

// Or
exports.add = (a, b) => a + b;
exports.subtract = (a, b) => a - b;

// Importing
const math = require('./math');
const {add, subtract} = require('./math');
```

---

## 15. Advanced Concepts

### Closures
```javascript
function outer(x) {
    return function inner(y) {
        return x + y;
    };
}

let add5 = outer(5);
add5(3); // 8
add5(10); // 15

// Private variables
function createCounter() {
    let count = 0;

    return {
        increment() {
            return ++count;
        },
        decrement() {
            return --count;
        },
        getCount() {
            return count;
        }
    };
}

let counter = createCounter();
counter.increment(); // 1
counter.increment(); // 2
counter.getCount(); // 2
```

### Hoisting
```javascript
// Variable hoisting
console.log(x); // undefined
var x = 5;

// Equivalent to:
var x;
console.log(x);
x = 5;

// Function hoisting
greet(); // Works
function greet() {
    console.log("Hello");
}

// let/const not hoisted
// console.log(y); // ReferenceError
let y = 10;
```

### Scope
```javascript
// Global scope
var globalVar = "global";

function test() {
    // Function scope
    var functionVar = "function";

    if (true) {
        // Block scope
        let blockVar = "block";
        const blockConst = "const";
        var functionVar2 = "function"; // Function scoped
    }

    // console.log(blockVar); // Error
    console.log(functionVar2); // Works
}
```

### this Keyword
```javascript
// Global context
console.log(this); // window (browser) or global (Node.js)

// Object method
let obj = {
    name: "John",
    greet() {
        console.log(this.name); // "John"
    }
};

// Constructor
function Person(name) {
    this.name = name;
}
let john = new Person("John");

// Arrow functions (inherit this)
let obj2 = {
    name: "Jane",
    greet: () => {
        console.log(this.name); // undefined (global this)
    }
};

// Explicit binding
function greet() {
    console.log(this.name);
}

let person = {name: "John"};
greet.call(person); // "John"
greet.apply(person); // "John"
let boundGreet = greet.bind(person);
boundGreet(); // "John"
```

### call, apply, bind
```javascript
function greet(greeting, punctuation) {
    return `${greeting}, ${this.name}${punctuation}`;
}

let person = {name: "John"};

// call - arguments separately
greet.call(person, "Hello", "!"); // "Hello, John!"

// apply - arguments as array
greet.apply(person, ["Hi", "."]); // "Hi, John."

// bind - returns new function
let boundGreet = greet.bind(person, "Hey");
boundGreet("!!!"); // "Hey, John!!!"
```

### Prototypes
```javascript
// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Add method to prototype
Person.prototype.greet = function() {
    return `Hello, I'm ${this.name}`;
};

let john = new Person("John", 30);
john.greet(); // "Hello, I'm John"

// Prototype chain
john.__proto__ === Person.prototype; // true
Person.prototype.__proto__ === Object.prototype; // true
Object.prototype.__proto__ === null; // true

// Check prototype
Person.prototype.isPrototypeOf(john); // true
Object.getPrototypeOf(john) === Person.prototype; // true
```

### Inheritance
```javascript
// Prototypal inheritance
function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function() {
    return `${this.name} makes a sound`;
};

function Dog(name, breed) {
    Animal.call(this, name);
    this.breed = breed;
}

// Set up inheritance
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
    return `${this.name} barks`;
};

let dog = new Dog("Rex", "Labrador");
dog.speak(); // "Rex makes a sound"
dog.bark(); // "Rex barks"
```

### Currying
```javascript
// Basic currying
function curry(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

curry(1)(2)(3); // 6

// Generic curry function
function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        } else {
            return function(...args2) {
                return curried.apply(this, args.concat(args2));
            };
        }
    };
}

function sum(a, b, c) {
    return a + b + c;
}

let curriedSum = curry(sum);
curriedSum(1)(2)(3); // 6
curriedSum(1, 2)(3); // 6
curriedSum(1)(2, 3); // 6
```

### Memoization
```javascript
function memoize(fn) {
    let cache = {};

    return function(...args) {
        let key = JSON.stringify(args);

        if (key in cache) {
            console.log("From cache");
            return cache[key];
        }

        let result = fn.apply(this, args);
        cache[key] = result;
        return result;
    };
}

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

let memoFib = memoize(fibonacci);
memoFib(40); // Slow first time
memoFib(40); // Fast from cache
```

### Debouncing
```javascript
function debounce(fn, delay) {
    let timeoutId;

    return function(...args) {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}

// Usage
let searchInput = document.querySelector("#search");
let debouncedSearch = debounce(search, 300);

searchInput.addEventListener("input", debouncedSearch);
```

### Throttling
```javascript
function throttle(fn, delay) {
    let lastCall = 0;

    return function(...args) {
        let now = Date.now();

        if (now - lastCall >= delay) {
            lastCall = now;
            fn.apply(this, args);
        }
    };
}

// Usage
let throttledScroll = throttle(handleScroll, 100);
window.addEventListener("scroll", throttledScroll);
```

---

## 16. Object-Oriented Programming

### Classes
```javascript
class Person {
    // Constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Instance method
    greet() {
        return `Hello, I'm ${this.name}`;
    }

    // Static method
    static species() {
        return "Homo sapiens";
    }

    // Getter
    get info() {
        return `${this.name}, ${this.age}`;
    }

    // Setter
    set info(value) {
        [this.name, this.age] = value.split(", ");
    }
}

let john = new Person("John", 30);
john.greet(); // "Hello, I'm John"
Person.species(); // "Homo sapiens"
```

### Inheritance
```javascript
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        return `${this.name} makes a sound`;
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Call parent constructor
        this.breed = breed;
    }

    speak() {
        return `${this.name} barks`;
    }

    wagTail() {
        return `${this.name} wags tail`;
    }
}

let dog = new Dog("Rex", "Labrador");
dog.speak(); // "Rex barks"
dog.wagTail(); // "Rex wags tail"
```

### Private Fields (ES2022)
```javascript
class BankAccount {
    #balance = 0; // Private field

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        this.#balance += amount;
    }

    getBalance() {
        return this.#balance;
    }

    // Private method
    #validateAmount(amount) {
        return amount > 0;
    }
}

let account = new BankAccount(1000);
account.deposit(500);
account.getBalance(); // 1500
// account.#balance; // Error: private field
```

### Static Blocks (ES2022)
```javascript
class Config {
    static #apiKey;

    static {
        // Static initialization block
        this.#apiKey = process.env.API_KEY;
    }

    static getApiKey() {
        return this.#apiKey;
    }
}
```

---

## 17. Functional Programming

### Pure Functions
```javascript
// Pure function (no side effects)
function add(a, b) {
    return a + b;
}

// Impure function (side effects)
let total = 0;
function addToTotal(value) {
    total += value; // Modifies external state
    return total;
}
```

### Immutability
```javascript
// Avoid mutation
let arr = [1, 2, 3];

// Bad
arr.push(4);

// Good
let newArr = [...arr, 4];

// Objects
let person = {name: "John", age: 30};

// Bad
person.age = 31;

// Good
let updatedPerson = {...person, age: 31};
```

### Higher-Order Functions
```javascript
// Function that returns a function
function multiplier(factor) {
    return (number) => number * factor;
}

let double = multiplier(2);
let triple = multiplier(3);

double(5); // 10
triple(5); // 15

// Function that takes a function
function applyOperation(arr, operation) {
    return arr.map(operation);
}

applyOperation([1, 2, 3], x => x * 2); // [2, 4, 6]
```

### Function Composition
```javascript
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

const add5 = x => x + 5;
const multiply2 = x => x * 2;
const subtract3 = x => x - 3;

const combined = compose(subtract3, multiply2, add5);
combined(10); // (10 + 5) * 2 - 3 = 27
```

### Pipe
```javascript
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

const add5 = x => x + 5;
const multiply2 = x => x * 2;

const combined = pipe(add5, multiply2);
combined(10); // (10 + 5) * 2 = 30
```

---

## 18. Design Patterns

### Module Pattern
```javascript
const Calculator = (function() {
    // Private
    let result = 0;

    function log(message) {
        console.log(message);
    }

    // Public
    return {
        add(x) {
            result += x;
            log(`Added ${x}`);
            return this;
        },
        subtract(x) {
            result -= x;
            log(`Subtracted ${x}`);
            return this;
        },
        getResult() {
            return result;
        }
    };
})();

Calculator.add(5).subtract(2).getResult(); // 3
```

### Singleton Pattern
```javascript
const Singleton = (function() {
    let instance;

    function createInstance() {
        return {
            name: "Singleton",
            getData() {
                return "Data";
            }
        };
    }

    return {
        getInstance() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

let instance1 = Singleton.getInstance();
let instance2 = Singleton.getInstance();
instance1 === instance2; // true
```

### Factory Pattern
```javascript
class Car {
    constructor(options) {
        this.doors = options.doors || 4;
        this.color = options.color || "white";
    }
}

class Truck {
    constructor(options) {
        this.doors = options.doors || 2;
        this.color = options.color || "black";
        this.wheelSize = options.wheelSize || "large";
    }
}

class VehicleFactory {
    createVehicle(type, options) {
        switch(type) {
            case "car":
                return new Car(options);
            case "truck":
                return new Truck(options);
            default:
                throw new Error("Unknown vehicle type");
        }
    }
}

let factory = new VehicleFactory();
let car = factory.createVehicle("car", {color: "red"});
let truck = factory.createVehicle("truck", {wheelSize: "huge"});
```

### Observer Pattern
```javascript
class Subject {
    constructor() {
        this.observers = [];
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notify(data) {
        this.observers.forEach(observer => observer.update(data));
    }
}

class Observer {
    constructor(name) {
        this.name = name;
    }

    update(data) {
        console.log(`${this.name} received: ${data}`);
    }
}

let subject = new Subject();
let observer1 = new Observer("Observer 1");
let observer2 = new Observer("Observer 2");

subject.subscribe(observer1);
subject.subscribe(observer2);
subject.notify("Hello!"); // Both observers receive message
```

### Pub/Sub Pattern
```javascript
const PubSub = {
    events: {},

    subscribe(event, callback) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(callback);
    },

    unsubscribe(event, callback) {
        if (this.events[event]) {
            this.events[event] = this.events[event].filter(cb => cb !== callback);
        }
    },

    publish(event, data) {
        if (this.events[event]) {
            this.events[event].forEach(callback => callback(data));
        }
    }
};

// Usage
PubSub.subscribe("userLoggedIn", (user) => {
    console.log(`Welcome ${user.name}!`);
});

PubSub.publish("userLoggedIn", {name: "John"});
```

---

## 19. Performance Optimization

### Debouncing and Throttling
```javascript
// Debounce - Wait for pause in events
function debounce(fn, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn.apply(this, args), delay);
    };
}

// Throttle - Limit execution rate
function throttle(fn, delay) {
    let lastCall = 0;
    return function(...args) {
        let now = Date.now();
        if (now - lastCall >= delay) {
            lastCall = now;
            fn.apply(this, args);
        }
    };
}
```

### Lazy Loading
```javascript
// Lazy load images
const images = document.querySelectorAll('img[data-src]');

const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            imageObserver.unobserve(img);
        }
    });
});

images.forEach(img => imageObserver.observe(img));
```

### Memoization
```javascript
function memoize(fn) {
    const cache = new Map();

    return function(...args) {
        const key = JSON.stringify(args);

        if (cache.has(key)) {
            return cache.get(key);
        }

        const result = fn.apply(this, args);
        cache.set(key, result);
        return result;
    };
}

const expensiveOperation = memoize((n) => {
    console.log("Computing...");
    return n * n;
});

expensiveOperation(5); // Computing... 25
expensiveOperation(5); // 25 (from cache)
```

### Web Workers
```javascript
// main.js
const worker = new Worker('worker.js');

worker.postMessage({data: [1, 2, 3, 4, 5]});

worker.onmessage = (e) => {
    console.log('Result:', e.data);
};

// worker.js
self.onmessage = (e) => {
    const result = e.data.data.reduce((a, b) => a + b, 0);
    self.postMessage(result);
};
```

### RequestAnimationFrame
```javascript
function animate() {
    // Animation code
    element.style.left = position + 'px';
    position++;

    if (position < 500) {
        requestAnimationFrame(animate);
    }
}

requestAnimationFrame(animate);
```

---

## 20. Best Practices

### Code Organization
```javascript
// Use meaningful names
// Bad
let d = new Date();
let x = 10;

// Good
let currentDate = new Date();
let userAge = 10;

// Use constants for magic numbers
const MAX_USERS = 100;
const API_TIMEOUT = 5000;

// Group related code
class UserService {
    getUser() {}
    createUser() {}
    updateUser() {}
    deleteUser() {}
}
```

### Error Handling
```javascript
// Always handle errors
async function fetchData() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Failed to fetch data:', error);
        throw error;
    }
}

// Validate inputs
function divide(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError('Arguments must be numbers');
    }
    if (b === 0) {
        throw new Error('Division by zero');
    }
    return a / b;
}
```

### Performance
```javascript
// Use const/let instead of var
const PI = 3.14159;
let counter = 0;

// Avoid global variables
(function() {
    // Code here
})();

// Use strict mode
"use strict";

// Cache DOM queries
const button = document.querySelector('#myButton');
// Don't query repeatedly in loop

// Use event delegation
document.querySelector('#list').addEventListener('click', (e) => {
    if (e.target.matches('.item')) {
        // Handle click
    }
});
```

### Security
```javascript
// Sanitize user input
function sanitize(input) {
    return input.replace(/[<>]/g, '');
}

// Use textContent instead of innerHTML when possible
element.textContent = userInput; // Safe
// element.innerHTML = userInput; // Dangerous

// Validate on server side too
// Never trust client-side validation alone

// Use HTTPS
// Store sensitive data securely
// Use environment variables for secrets
```

### Modern JavaScript
```javascript
// Use arrow functions
const add = (a, b) => a + b;

// Use template literals
const message = `Hello, ${name}!`;

// Use destructuring
const {name, age} = user;
const [first, second] = array;

// Use spread operator
const combined = [...arr1, ...arr2];
const merged = {...obj1, ...obj2};

// Use optional chaining
const city = user?.address?.city;

// Use nullish coalescing
const value = input ?? defaultValue;

// Use async/await
async function fetchData() {
    const data = await fetch(url);
    return data.json();
}
```

### Code Quality
```javascript
// Keep functions small and focused
// Bad
function processUser(user) {
    // 100 lines of code
}

// Good
function validateUser(user) { /* ... */ }
function saveUser(user) { /* ... */ }
function notifyUser(user) { /* ... */ }

// Use early returns
function getDiscount(user) {
    if (!user) return 0;
    if (!user.isPremium) return 0;
    if (user.age < 18) return 0;
    return 0.2;
}

// Avoid deep nesting
// Bad
if (condition1) {
    if (condition2) {
        if (condition3) {
            // Code
        }
    }
}

// Good
if (!condition1) return;
if (!condition2) return;
if (!condition3) return;
// Code
```

### Comments and Documentation
```javascript
/**
 * Calculates the sum of two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} The sum of a and b
 */
function add(a, b) {
    return a + b;
}

// Explain WHY, not WHAT
// Bad
// Increment counter by 1
counter++;

// Good
// Reset counter after reaching max to prevent overflow
if (counter >= MAX_VALUE) {
    counter = 0;
}
```

---

## Conclusion

This documentation covers JavaScript from basic to advanced concepts. Practice these concepts regularly to master JavaScript. Keep learning and exploring new features as JavaScript continues to evolve!

### Resources for Further Learning
- MDN Web Docs
- JavaScript.info
- ECMAScript Specifications
- Node.js Documentation
- TypeScript Documentation

### Next Steps
1. Build projects using these concepts
2. Learn a framework (React, Vue, Angular)
3. Explore TypeScript
4. Learn Node.js for backend
5. Practice algorithms and data structures
6. Contribute to open source

---

**Happy Coding! 🚀**

