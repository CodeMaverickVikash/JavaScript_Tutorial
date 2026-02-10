# JavaScript Interview Preparation Guide
## From Fresher to Advanced Level

---

## Table of Contents

1. [Fresher Level Questions](#fresher-level-questions)
2. [Intermediate Level Questions](#intermediate-level-questions)
3. [Advanced Level Questions](#advanced-level-questions)
4. [Coding Challenges](#coding-challenges)
5. [System Design Questions](#system-design-questions)
6. [Best Practices & Tips](#best-practices--tips)

---

## Fresher Level Questions

### 1. What is JavaScript?
**Answer:** JavaScript is a high-level, interpreted programming language used to create interactive web pages. It's a client-side scripting language that runs in the browser, but can also run on the server (Node.js).

**Key Points:**
- Interpreted language
- Dynamic typing
- Prototype-based
- First-class functions
- Event-driven

---

### 2. What are the data types in JavaScript?
**Answer:** JavaScript has 8 data types:

**Primitive Types (7):**
1. Number
2. String
3. Boolean
4. Undefined
5. Null
6. Symbol (ES6)
7. BigInt (ES2020)

**Reference Type (1):**
8. Object (includes Arrays, Functions, Dates, etc.)

```javascript
let num = 42;              // Number
let str = "Hello";         // String
let bool = true;           // Boolean
let undef;                 // Undefined
let empty = null;          // Null
let sym = Symbol();        // Symbol
let big = 123n;            // BigInt
let obj = {name: "John"};  // Object
```

---

### 3. What is the difference between var, let, and const?
**Answer:**

| Feature | var | let | const |
|---------|-----|-----|-------|
| Scope | Function | Block | Block |
| Hoisting | Yes (undefined) | Yes (TDZ) | Yes (TDZ) |
| Redeclaration | Yes | No | No |
| Reassignment | Yes | Yes | No |
| Initialization | Optional | Optional | Required |

```javascript
// var - function scoped
function test() {
    var x = 10;
    if (true) {
        var x = 20; // Same variable
    }
    console.log(x); // 20
}

// let - block scoped
function test2() {
    let y = 10;
    if (true) {
        let y = 20; // Different variable
    }
    console.log(y); // 10
}

// const - block scoped, immutable binding
const PI = 3.14;
// PI = 3.14159; // Error
```

---

### 4. What is hoisting?
**Answer:** Hoisting is JavaScript's behavior of moving declarations to the top of their scope before code execution.

```javascript
// Variable hoisting
console.log(x); // undefined (not error)
var x = 5;

// Equivalent to:
var x;
console.log(x);
x = 5;

// Function hoisting
greet(); // Works!
function greet() {
    console.log("Hello");
}

// let/const are hoisted but in TDZ
// console.log(y); // ReferenceError
let y = 10;
```

---

### 5. What is the difference between == and ===?
**Answer:**

**== (Loose Equality):** Compares values after type coercion
**=== (Strict Equality):** Compares both value and type

```javascript
5 == "5";    // true (type coercion)
5 === "5";   // false (different types)

null == undefined;   // true
null === undefined;  // false

0 == false;   // true
0 === false;  // false

'' == false;  // true
'' === false; // false
```

**Best Practice:** Always use === unless you specifically need type coercion.

---

### 6. What are falsy values in JavaScript?
**Answer:** Values that evaluate to false in boolean context:

```javascript
Boolean(false);      // false
Boolean(0);          // false
Boolean(-0);         // false
Boolean(0n);         // false
Boolean("");         // false
Boolean(null);       // false
Boolean(undefined);  // false
Boolean(NaN);        // false

// Everything else is truthy
Boolean(true);       // true
Boolean(1);          // true
Boolean("hello");    // true
Boolean([]);         // true
Boolean({});         // true
```

---

### 7. What is the difference between null and undefined?
**Answer:**

**undefined:** Variable declared but not assigned a value
**null:** Intentional absence of value

```javascript
let x;
console.log(x); // undefined

let y = null;
console.log(y); // null

typeof undefined; // "undefined"
typeof null;      // "object" (JavaScript bug)

null == undefined;  // true
null === undefined; // false
```

---

### 8. What are template literals?
**Answer:** Template literals are string literals allowing embedded expressions and multi-line strings.

```javascript
// Basic usage
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

// Expressions
let result = `2 + 2 = ${2 + 2}`; // "2 + 2 = 4"

// Function calls
let greeting = `Hello, ${getName()}!`;
```

---

### 9. What is the difference between function declaration and function expression?
**Answer:**

**Function Declaration:**
```javascript
// Hoisted - can call before declaration
greet(); // Works!

function greet() {
    return "Hello";
}
```

**Function Expression:**
```javascript
// Not hoisted - cannot call before declaration
// greet(); // Error!

const greet = function() {
    return "Hello";
};

greet(); // Works
```

**Key Differences:**
- Function declarations are hoisted
- Function expressions are not hoisted
- Function expressions can be anonymous
- Function declarations must have a name

---

### 10. What are arrow functions?
**Answer:** Arrow functions are a concise syntax for writing functions introduced in ES6.

```javascript
// Traditional function
function add(a, b) {
    return a + b;
}

// Arrow function
const add = (a, b) => a + b;

// With single parameter (parentheses optional)
const square = x => x * x;

// With no parameters
const greet = () => "Hello";

// With block body
const multiply = (a, b) => {
    const result = a * b;
    return result;
};

// Returning object (wrap in parentheses)
const getPerson = () => ({name: "John", age: 30});
```

**Key Differences from regular functions:**
- No `this` binding (inherits from parent scope)
- No `arguments` object
- Cannot be used as constructors
- More concise syntax

---

### 11. What is the spread operator?
**Answer:** The spread operator (...) expands iterables into individual elements.

```javascript
// Arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

// Copy array
let copy = [...arr1];

// Objects
let obj1 = {a: 1, b: 2};
let obj2 = {c: 3, d: 4};
let merged = {...obj1, ...obj2}; // {a: 1, b: 2, c: 3, d: 4}

// Function arguments
function sum(a, b, c) {
    return a + b + c;
}
sum(...[1, 2, 3]); // 6

// String to array
let chars = [..."hello"]; // ["h", "e", "l", "l", "o"]
```

---

### 12. What is destructuring?
**Answer:** Destructuring is a way to extract values from arrays or objects into distinct variables.

```javascript
// Array destructuring
let [a, b, c] = [1, 2, 3];
console.log(a, b, c); // 1 2 3

// Skip elements
let [first, , third] = [1, 2, 3];

// Rest operator
let [x, ...rest] = [1, 2, 3, 4, 5];
// x = 1, rest = [2, 3, 4, 5]

// Object destructuring
let person = {name: "John", age: 30, city: "NYC"};
let {name, age} = person;

// Rename variables
let {name: personName, age: personAge} = person;

// Default values
let {name, country = "USA"} = person;

// Nested destructuring
let user = {
    id: 1,
    info: {name: "John", age: 30}
};
let {info: {name, age}} = user;
```

---

### 13. What are the different ways to create objects?
**Answer:**

```javascript
// 1. Object literal
let obj1 = {name: "John", age: 30};

// 2. Object constructor
let obj2 = new Object();
obj2.name = "John";

// 3. Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}
let obj3 = new Person("John", 30);

// 4. Object.create()
let proto = {greet() { return "Hello"; }};
let obj4 = Object.create(proto);
obj4.name = "John";

// 5. Class (ES6)
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let obj5 = new Person("John", 30);
```

---

### 14. What is the difference between for...in and for...of?
**Answer:**

**for...in:** Iterates over enumerable properties (keys) of an object
**for...of:** Iterates over iterable objects (values)

```javascript
let arr = [10, 20, 30];

// for...in - iterates over indices
for (let index in arr) {
    console.log(index); // "0", "1", "2" (strings)
}

// for...of - iterates over values
for (let value of arr) {
    console.log(value); // 10, 20, 30
}

// Objects
let person = {name: "John", age: 30};

// for...in works with objects
for (let key in person) {
    console.log(key, person[key]); // name John, age 30
}

// for...of doesn't work with plain objects
// for (let value of person) {} // Error

// for...of works with iterables
for (let char of "hello") {
    console.log(char); // h, e, l, l, o
}
```

---

### 15. What are array methods? Name some important ones.
**Answer:**

**Mutating Methods:**
```javascript
let arr = [1, 2, 3];

arr.push(4);        // Add to end: [1, 2, 3, 4]
arr.pop();          // Remove from end: [1, 2, 3]
arr.unshift(0);     // Add to start: [0, 1, 2, 3]
arr.shift();        // Remove from start: [1, 2, 3]
arr.splice(1, 1);   // Remove/add elements: [1, 3]
arr.reverse();      // Reverse: [3, 1]
arr.sort();         // Sort: [1, 3]
```

**Non-Mutating Methods:**
```javascript
let arr = [1, 2, 3, 4, 5];

arr.map(x => x * 2);           // [2, 4, 6, 8, 10]
arr.filter(x => x > 2);        // [3, 4, 5]
arr.reduce((a, b) => a + b);   // 15
arr.find(x => x > 2);          // 3
arr.findIndex(x => x > 2);     // 2
arr.some(x => x > 3);          // true
arr.every(x => x > 0);         // true
arr.includes(3);               // true
arr.slice(1, 3);               // [2, 3]
arr.concat([6, 7]);            // [1, 2, 3, 4, 5, 6, 7]
```

---

## Intermediate Level Questions

### 16. What is a closure?
**Answer:** A closure is a function that has access to variables in its outer (enclosing) function's scope, even after the outer function has returned.

```javascript
function outer() {
    let count = 0;

    return function inner() {
        count++;
        return count;
    };
}

let counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// Practical example: Private variables
function createBankAccount(initialBalance) {
    let balance = initialBalance; // Private variable

    return {
        deposit(amount) {
            balance += amount;
            return balance;
        },
        withdraw(amount) {
            if (amount <= balance) {
                balance -= amount;
                return balance;
            }
            return "Insufficient funds";
        },
        getBalance() {
            return balance;
        }
    };
}

let account = createBankAccount(1000);
account.deposit(500);   // 1500
account.withdraw(200);  // 1300
account.getBalance();   // 1300
// account.balance;     // undefined (private)
```

**Use Cases:**
- Data privacy/encapsulation
- Function factories
- Callbacks and event handlers
- Memoization

---

### 17. What is the 'this' keyword?
**Answer:** `this` refers to the object that is executing the current function.

```javascript
// Global context
console.log(this); // window (browser) or global (Node.js)

// Object method
let person = {
    name: "John",
    greet() {
        console.log(this.name); // "John"
    }
};
person.greet();

// Constructor function
function Person(name) {
    this.name = name;
}
let john = new Person("John");

// Arrow functions (inherit this from parent)
let obj = {
    name: "Jane",
    greet: () => {
        console.log(this.name); // undefined (global this)
    },
    greet2() {
        setTimeout(() => {
            console.log(this.name); // "Jane" (inherits from greet2)
        }, 1000);
    }
};

// Event handler
button.addEventListener('click', function() {
    console.log(this); // button element
});

// Explicit binding
function greet() {
    console.log(this.name);
}
let person = {name: "John"};
greet.call(person);   // "John"
greet.apply(person);  // "John"
let bound = greet.bind(person);
bound();              // "John"
```

---

### 18. What is the difference between call, apply, and bind?
**Answer:** All three are used to set the `this` value explicitly.

```javascript
function greet(greeting, punctuation) {
    return `${greeting}, ${this.name}${punctuation}`;
}

let person = {name: "John"};

// call - arguments passed separately
greet.call(person, "Hello", "!"); // "Hello, John!"

// apply - arguments passed as array
greet.apply(person, ["Hi", "."]); // "Hi, John."

// bind - returns new function with bound this
let boundGreet = greet.bind(person);
boundGreet("Hey", "!!!"); // "Hey, John!!!"

// Partial application with bind
let sayHello = greet.bind(person, "Hello");
sayHello("!"); // "Hello, John!"
```

**Key Differences:**
- `call`: Invokes immediately, arguments separately
- `apply`: Invokes immediately, arguments as array
- `bind`: Returns new function, doesn't invoke

---

### 19. What is prototypal inheritance?
**Answer:** JavaScript uses prototypal inheritance where objects inherit properties and methods from other objects.

```javascript
// Constructor function
function Animal(name) {
    this.name = name;
}

// Add method to prototype
Animal.prototype.speak = function() {
    return `${this.name} makes a sound`;
};

let dog = new Animal("Rex");
dog.speak(); // "Rex makes a sound"

// Prototype chain
dog.__proto__ === Animal.prototype;           // true
Animal.prototype.__proto__ === Object.prototype; // true
Object.prototype.__proto__ === null;          // true

// Inheritance
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

let myDog = new Dog("Rex", "Labrador");
myDog.speak(); // "Rex makes a sound" (inherited)
myDog.bark();  // "Rex barks"
```

---

### 20. What are Promises?
**Answer:** Promises are objects representing the eventual completion or failure of an asynchronous operation.

```javascript
// Creating a promise
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = true;
        if (success) {
            resolve("Success!");
        } else {
            reject("Error!");
        }
    }, 1000);
});

// Consuming a promise
promise
    .then(result => {
        console.log(result); // "Success!"
        return "Next step";
    })
    .then(result => {
        console.log(result); // "Next step"
    })
    .catch(error => {
        console.error(error);
    })
    .finally(() => {
        console.log("Cleanup");
    });

// Promise states
// 1. Pending - initial state
// 2. Fulfilled - operation completed successfully
// 3. Rejected - operation failed
```

**Promise Methods:**
```javascript
// Promise.all - wait for all
Promise.all([promise1, promise2, promise3])
    .then(results => console.log(results));

// Promise.race - first to settle
Promise.race([promise1, promise2])
    .then(result => console.log(result));

// Promise.allSettled - wait for all (ES2020)
Promise.allSettled([promise1, promise2])
    .then(results => console.log(results));

// Promise.any - first fulfilled (ES2021)
Promise.any([promise1, promise2])
    .then(result => console.log(result));
```

---

### 21. What is async/await?
**Answer:** Async/await is syntactic sugar over Promises, making asynchronous code look synchronous.

```javascript
// Without async/await
function fetchData() {
    return fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            return data;
        })
        .catch(error => console.error(error));
}

// With async/await
async function fetchData() {
    try {
        let response = await fetch('https://api.example.com/data');
        let data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
    }
}

// Sequential execution
async function sequential() {
    let result1 = await operation1();
    let result2 = await operation2(result1);
    return result2;
}

// Parallel execution
async function parallel() {
    let [result1, result2] = await Promise.all([
        operation1(),
        operation2()
    ]);
    return {result1, result2};
}
```

**Key Points:**
- `async` function always returns a Promise
- `await` can only be used inside `async` functions
- `await` pauses execution until Promise resolves
- Use try/catch for error handling

---

### 22. What is the Event Loop?
**Answer:** The Event Loop is JavaScript's mechanism for handling asynchronous operations.

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
```

**How it works:**
1. **Call Stack**: Executes synchronous code
2. **Web APIs**: Handles async operations (setTimeout, fetch, etc.)
3. **Callback Queue (Macrotask)**: setTimeout, setInterval callbacks
4. **Microtask Queue**: Promise callbacks, queueMicrotask
5. **Event Loop**: Checks if call stack is empty, then processes microtasks, then macrotasks

**Priority:**
1. Synchronous code (Call Stack)
2. Microtasks (Promises)
3. Macrotasks (setTimeout)

---

### 23. What is debouncing and throttling?
**Answer:** Both are techniques to limit function execution rate.

**Debouncing:** Delays execution until after a pause in events
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

// Usage: Search input
let searchInput = document.querySelector('#search');
let debouncedSearch = debounce(search, 300);
searchInput.addEventListener('input', debouncedSearch);
```

**Throttling:** Limits execution to once per time period
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

// Usage: Scroll event
let throttledScroll = throttle(handleScroll, 100);
window.addEventListener('scroll', throttledScroll);
```

**When to use:**
- **Debounce**: Search input, window resize, form validation
- **Throttle**: Scroll events, mouse movement, button clicks

---

### 24. What is currying?
**Answer:** Currying is transforming a function with multiple arguments into a sequence of functions each taking a single argument.

```javascript
// Regular function
function add(a, b, c) {
    return a + b + c;
}
add(1, 2, 3); // 6

// Curried function
function curriedAdd(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}
curriedAdd(1)(2)(3); // 6

// Arrow function version
const curriedAdd = a => b => c => a + b + c;

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
curriedSum(1)(2)(3);    // 6
curriedSum(1, 2)(3);    // 6
curriedSum(1)(2, 3);    // 6
```

**Benefits:**
- Partial application
- Function composition
- Reusability

---

### 25. What is memoization?
**Answer:** Memoization is an optimization technique that caches function results.

```javascript
function memoize(fn) {
    let cache = {};

    return function(...args) {
        let key = JSON.stringify(args);

        if (key in cache) {
            console.log("From cache");
            return cache[key];
        }

        console.log("Computing...");
        let result = fn.apply(this, args);
        cache[key] = result;
        return result;
    };
}

// Example: Fibonacci
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

let memoFib = memoize(fibonacci);
memoFib(40); // Computing... (slow)
memoFib(40); // From cache (fast)

// Using Map for better performance
function memoize(fn) {
    let cache = new Map();

    return function(...args) {
        let key = JSON.stringify(args);

        if (cache.has(key)) {
            return cache.get(key);
        }

        let result = fn.apply(this, args);
        cache.set(key, result);
        return result;
    };
}
```

---

## Advanced Level Questions

### 26. Explain the prototype chain
**Answer:** The prototype chain is the mechanism by which JavaScript objects inherit properties and methods.

```javascript
function Person(name) {
    this.name = name;
}

Person.prototype.greet = function() {
    return `Hello, I'm ${this.name}`;
};

let john = new Person("John");

// Prototype chain
john.name;           // Own property
john.greet();        // From Person.prototype
john.toString();     // From Object.prototype
john.hasOwnProperty('name'); // From Object.prototype

// Chain visualization
john.__proto__ === Person.prototype;           // true
Person.prototype.__proto__ === Object.prototype; // true
Object.prototype.__proto__ === null;           // true

// Property lookup
// 1. Check own properties
// 2. Check prototype
// 3. Check prototype's prototype
// 4. Continue until null
```

**Key Methods:**
```javascript
// Check prototype
Object.getPrototypeOf(john) === Person.prototype; // true
Person.prototype.isPrototypeOf(john); // true

// Check own property
john.hasOwnProperty('name'); // true
john.hasOwnProperty('greet'); // false

// Get own properties
Object.keys(john); // ["name"]
Object.getOwnPropertyNames(john); // ["name"]
```

---

### 27. What are Symbols and their use cases?
**Answer:** Symbols are unique and immutable primitive values, often used as object property keys.

```javascript
// Creating symbols
let sym1 = Symbol();
let sym2 = Symbol("description");
let sym3 = Symbol("description");

sym2 === sym3; // false (always unique)

// As object keys
let id = Symbol("id");
let user = {
    name: "John",
    [id]: 123
};

user[id]; // 123
user.id;  // undefined

// Symbols are hidden from iteration
Object.keys(user);           // ["name"]
Object.getOwnPropertyNames(user); // ["name"]
Object.getOwnPropertySymbols(user); // [Symbol(id)]

// Well-known symbols
Symbol.iterator
Symbol.toStringTag
Symbol.toPrimitive
Symbol.hasInstance

// Custom iterator using Symbol.iterator
let range = {
    from: 1,
    to: 5,

    [Symbol.iterator]() {
        let current = this.from;
        let last = this.to;

        return {
            next() {
                if (current <= last) {
                    return {value: current++, done: false};
                } else {
                    return {done: true};
                }
            }
        };
    }
};

for (let num of range) {
    console.log(num); // 1, 2, 3, 4, 5
}
```

**Use Cases:**
- Unique object keys
- Implementing iterators
- Meta-programming
- Avoiding property name collisions

---

### 28. What are Generators?
**Answer:** Generators are functions that can pause execution and resume later, yielding multiple values.

```javascript
// Generator function
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

// Infinite generator
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
fib.next().value; // 3

// Generator with parameters
function* range(start, end) {
    for (let i = start; i <= end; i++) {
        yield i;
    }
}

for (let num of range(1, 5)) {
    console.log(num); // 1, 2, 3, 4, 5
}

// Delegating generators
function* gen1() {
    yield 1;
    yield 2;
}

function* gen2() {
    yield* gen1();
    yield 3;
    yield 4;
}

[...gen2()]; // [1, 2, 3, 4]
```

**Use Cases:**
- Lazy evaluation
- Infinite sequences
- Async iteration
- State machines

---

### 29. What are Proxy and Reflect?
**Answer:** Proxy allows you to intercept and customize operations on objects. Reflect provides methods for interceptable operations.

**Proxy:**
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
        if (prop === 'age' && typeof value !== 'number') {
            throw new TypeError('Age must be a number');
        }
        target[prop] = value;
        return true;
    },
    has(target, prop) {
        console.log(`Checking ${prop}`);
        return prop in target;
    },
    deleteProperty(target, prop) {
        console.log(`Deleting ${prop}`);
        delete target[prop];
        return true;
    }
};

let proxy = new Proxy(target, handler);

proxy.name;        // "Getting name"
proxy.age = 31;    // "Setting age to 31"
'name' in proxy;   // "Checking name"
delete proxy.age;  // "Deleting age"
```

**Reflect:**
```javascript
let obj = {name: "John", age: 30};

// Get property
Reflect.get(obj, 'name'); // "John"

// Set property
Reflect.set(obj, 'age', 31);

// Has property
Reflect.has(obj, 'name'); // true

// Delete property
Reflect.deleteProperty(obj, 'age');

// Get keys
Reflect.ownKeys(obj); // ["name"]

// Define property
Reflect.defineProperty(obj, 'city', {
    value: 'NYC',
    writable: true
});
```

**Use Cases:**
- Validation
- Logging
- Data binding
- Virtual properties
- Access control

---

### 30. What are WeakMap and WeakSet?
**Answer:** WeakMap and WeakSet are collections that hold weak references to objects, allowing garbage collection.

**WeakMap:**
```javascript
let weakMap = new WeakMap();

let obj1 = {name: "John"};
let obj2 = {name: "Jane"};

weakMap.set(obj1, "metadata1");
weakMap.set(obj2, "metadata2");

weakMap.get(obj1); // "metadata1"
weakMap.has(obj1); // true
weakMap.delete(obj1);

// When obj is garbage collected, entry is automatically removed

// Use case: Private data
let privateData = new WeakMap();

class Person {
    constructor(name) {
        privateData.set(this, {name});
    }

    getName() {
        return privateData.get(this).name;
    }
}
```

**WeakSet:**
```javascript
let weakSet = new WeakSet();

let obj1 = {id: 1};
let obj2 = {id: 2};

weakSet.add(obj1);
weakSet.add(obj2);

weakSet.has(obj1); // true
weakSet.delete(obj1);

// Use case: Tracking objects
let visitedNodes = new WeakSet();

function traverse(node) {
    if (visitedNodes.has(node)) return;

    visitedNodes.add(node);
    // Process node
}
```

**Differences from Map/Set:**
- Keys must be objects (not primitives)
- Not iterable
- No size property
- Allows garbage collection
- No clear() method

---

## Coding Challenges

### 1. Reverse a String
```javascript
// Method 1: Built-in methods
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Method 2: Loop
function reverseString(str) {
    let reversed = '';
    for (let char of str) {
        reversed = char + reversed;
    }
    return reversed;
}

// Method 3: Reduce
function reverseString(str) {
    return str.split('').reduce((rev, char) => char + rev, '');
}

reverseString("hello"); // "olleh"
```

---

### 2. Check if String is Palindrome
```javascript
function isPalindrome(str) {
    let cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
}

// Optimized (check half)
function isPalindrome(str) {
    let cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let len = cleaned.length;

    for (let i = 0; i < len / 2; i++) {
        if (cleaned[i] !== cleaned[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

isPalindrome("A man, a plan, a canal: Panama"); // true
```

---

### 3. Find Largest Number in Array
```javascript
// Method 1: Math.max
function findLargest(arr) {
    return Math.max(...arr);
}

// Method 2: Reduce
function findLargest(arr) {
    return arr.reduce((max, num) => num > max ? num : max);
}

// Method 3: Loop
function findLargest(arr) {
    let max = arr[0];
    for (let num of arr) {
        if (num > max) max = num;
    }
    return max;
}

findLargest([1, 5, 3, 9, 2]); // 9
```

---

### 4. Remove Duplicates from Array
```javascript
// Method 1: Set
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Method 2: Filter
function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

// Method 3: Reduce
function removeDuplicates(arr) {
    return arr.reduce((unique, item) => {
        return unique.includes(item) ? unique : [...unique, item];
    }, []);
}

removeDuplicates([1, 2, 2, 3, 4, 4, 5]); // [1, 2, 3, 4, 5]
```

---

### 5. Flatten Nested Array
```javascript
// Method 1: flat()
function flatten(arr) {
    return arr.flat(Infinity);
}

// Method 2: Recursive
function flatten(arr) {
    let result = [];

    for (let item of arr) {
        if (Array.isArray(item)) {
            result.push(...flatten(item));
        } else {
            result.push(item);
        }
    }

    return result;
}

// Method 3: Reduce
function flatten(arr) {
    return arr.reduce((flat, item) => {
        return flat.concat(Array.isArray(item) ? flatten(item) : item);
    }, []);
}

flatten([1, [2, [3, [4]], 5]]); // [1, 2, 3, 4, 5]
```

---

### 6. Implement debounce
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
const debouncedSearch = debounce((query) => {
    console.log("Searching for:", query);
}, 300);

debouncedSearch("a");
debouncedSearch("ab");
debouncedSearch("abc"); // Only this executes after 300ms
```

---

### 7. Implement throttle
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
const throttledScroll = throttle(() => {
    console.log("Scroll event");
}, 1000);

window.addEventListener('scroll', throttledScroll);
```

---

### 8. Deep Clone Object
```javascript
// Method 1: JSON (limitations: no functions, dates, undefined)
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

// Method 2: Recursive
function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    if (obj instanceof Date) {
        return new Date(obj);
    }

    if (obj instanceof Array) {
        return obj.map(item => deepClone(item));
    }

    let cloned = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            cloned[key] = deepClone(obj[key]);
        }
    }

    return cloned;
}

// Method 3: structuredClone (modern browsers)
function deepClone(obj) {
    return structuredClone(obj);
}
```

---

### 9. Implement Promise.all
```javascript
function promiseAll(promises) {
    return new Promise((resolve, reject) => {
        let results = [];
        let completed = 0;

        if (promises.length === 0) {
            resolve(results);
            return;
        }

        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then(result => {
                    results[index] = result;
                    completed++;

                    if (completed === promises.length) {
                        resolve(results);
                    }
                })
                .catch(error => {
                    reject(error);
                });
        });
    });
}

// Usage
promiseAll([
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
]).then(results => console.log(results)); // [1, 2, 3]
```

---

### 10. Implement Array.prototype.map
```javascript
Array.prototype.myMap = function(callback) {
    let result = [];

    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }

    return result;
};

// Usage
[1, 2, 3].myMap(x => x * 2); // [2, 4, 6]
```

---

### 11. Find Missing Number in Array
```javascript
// Array contains numbers from 1 to n with one missing
function findMissing(arr) {
    let n = arr.length + 1;
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = arr.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
}

findMissing([1, 2, 4, 5, 6]); // 3
```

---

### 12. Two Sum Problem
```javascript
// Find two numbers that add up to target
function twoSum(nums, target) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];

        if (map.has(complement)) {
            return [map.get(complement), i];
        }

        map.set(nums[i], i);
    }

    return null;
}

twoSum([2, 7, 11, 15], 9); // [0, 1]
```

---

### 13. Fibonacci Sequence
```javascript
// Recursive
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Iterative
function fibonacci(n) {
    if (n <= 1) return n;

    let [a, b] = [0, 1];
    for (let i = 2; i <= n; i++) {
        [a, b] = [b, a + b];
    }
    return b;
}

// Memoized
function fibonacci() {
    let cache = {};

    return function fib(n) {
        if (n in cache) return cache[n];
        if (n <= 1) return n;

        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
    };
}

let fib = fibonacci();
fib(10); // 55
```

---

### 14. Group Array of Objects by Property
```javascript
function groupBy(arr, key) {
    return arr.reduce((grouped, item) => {
        let value = item[key];
        if (!grouped[value]) {
            grouped[value] = [];
        }
        grouped[value].push(item);
        return grouped;
    }, {});
}

let people = [
    {name: "John", age: 30},
    {name: "Jane", age: 25},
    {name: "Bob", age: 30}
];

groupBy(people, 'age');
// {25: [{name: "Jane", age: 25}], 30: [{name: "John", age: 30}, {name: "Bob", age: 30}]}
```

---

### 15. Implement Function Composition
```javascript
function compose(...fns) {
    return function(x) {
        return fns.reduceRight((v, f) => f(v), x);
    };
}

function pipe(...fns) {
    return function(x) {
        return fns.reduce((v, f) => f(v), x);
    };
}

// Usage
const add5 = x => x + 5;
const multiply2 = x => x * 2;
const subtract3 = x => x - 3;

const composed = compose(subtract3, multiply2, add5);
composed(10); // (10 + 5) * 2 - 3 = 27

const piped = pipe(add5, multiply2, subtract3);
piped(10); // (10 + 5) * 2 - 3 = 27
```

---

## System Design Questions

### 1. Design a Rate Limiter
```javascript
class RateLimiter {
    constructor(maxRequests, timeWindow) {
        this.maxRequests = maxRequests;
        this.timeWindow = timeWindow;
        this.requests = new Map();
    }

    isAllowed(userId) {
        let now = Date.now();

        if (!this.requests.has(userId)) {
            this.requests.set(userId, []);
        }

        let userRequests = this.requests.get(userId);

        // Remove old requests
        userRequests = userRequests.filter(
            time => now - time < this.timeWindow
        );

        if (userRequests.length < this.maxRequests) {
            userRequests.push(now);
            this.requests.set(userId, userRequests);
            return true;
        }

        return false;
    }
}

// Usage: 5 requests per minute
let limiter = new RateLimiter(5, 60000);
limiter.isAllowed('user1'); // true
```

---

### 2. Design a Cache with LRU Eviction
```javascript
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
    }

    get(key) {
        if (!this.cache.has(key)) {
            return -1;
        }

        // Move to end (most recently used)
        let value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value);

        return value;
    }

    put(key, value) {
        // Delete if exists
        if (this.cache.has(key)) {
            this.cache.delete(key);
        }

        // Add to end
        this.cache.set(key, value);

        // Evict least recently used if over capacity
        if (this.cache.size > this.capacity) {
            let firstKey = this.cache.keys().next().value;
            this.cache.delete(firstKey);
        }
    }
}

// Usage
let cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
cache.get(1);    // 1
cache.put(3, 3); // Evicts key 2
cache.get(2);    // -1 (not found)
```

---

### 3. Design an Event Emitter
```javascript
class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(event, callback) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(callback);
    }

    off(event, callback) {
        if (this.events[event]) {
            this.events[event] = this.events[event].filter(
                cb => cb !== callback
            );
        }
    }

    emit(event, ...args) {
        if (this.events[event]) {
            this.events[event].forEach(callback => {
                callback(...args);
            });
        }
    }

    once(event, callback) {
        const wrapper = (...args) => {
            callback(...args);
            this.off(event, wrapper);
        };
        this.on(event, wrapper);
    }
}

// Usage
let emitter = new EventEmitter();
emitter.on('login', (user) => console.log(`${user} logged in`));
emitter.emit('login', 'John'); // "John logged in"
```

---

## Best Practices & Tips

### Interview Preparation Tips

1. **Understand the Basics**
   - Master data types, operators, control flow
   - Understand scope, hoisting, closures
   - Know array and object methods

2. **Practice Coding**
   - Solve problems on LeetCode, HackerRank
   - Implement common algorithms
   - Practice whiteboard coding

3. **Know Async Programming**
   - Callbacks, Promises, async/await
   - Event loop understanding
   - Error handling

4. **Study Common Patterns**
   - Design patterns (Module, Singleton, Factory)
   - Functional programming concepts
   - OOP principles

5. **Prepare Questions to Ask**
   - Tech stack
   - Team structure
   - Development process
   - Growth opportunities

### Common Mistakes to Avoid

1. **Not understanding `this`**
   - Practice different contexts
   - Know arrow function behavior

2. **Mutating data unintentionally**
   - Use const for immutability
   - Spread operator for copies

3. **Not handling errors**
   - Always use try/catch with async
   - Validate inputs

4. **Poor variable naming**
   - Use descriptive names
   - Follow conventions

5. **Not optimizing performance**
   - Avoid unnecessary loops
   - Use appropriate data structures
   - Implement debouncing/throttling

### Resources for Practice

- **Documentation**: MDN Web Docs, JavaScript.info
- **Coding Practice**: LeetCode, HackerRank, CodeWars
- **Books**: "You Don't Know JS", "Eloquent JavaScript"
- **Videos**: FreeCodeCamp, Traversy Media, Academind
- **Blogs**: CSS-Tricks, Dev.to, Medium

---

## Quick Reference Cheat Sheet

### Variable Declaration
```javascript
var x = 1;    // Function scoped, hoisted
let y = 2;    // Block scoped
const z = 3;  // Block scoped, immutable binding
```

### Functions
```javascript
function fn() {}           // Declaration
const fn = function() {};  // Expression
const fn = () => {};       // Arrow
```

### Array Methods
```javascript
map()     // Transform
filter()  // Filter
reduce()  // Reduce to single value
find()    // Find first match
some()    // Check if any match
every()   // Check if all match
```

### Object Methods
```javascript
Object.keys()      // Get keys
Object.values()    // Get values
Object.entries()   // Get [key, value] pairs
Object.assign()    // Merge objects
Object.freeze()    // Make immutable
```

### Async
```javascript
// Promise
promise.then().catch().finally()

// Async/await
async function fn() {
    try {
        await promise;
    } catch (error) {}
}
```

---

**Good luck with your interviews! 🚀**

