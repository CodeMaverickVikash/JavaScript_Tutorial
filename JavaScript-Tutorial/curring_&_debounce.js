// Higher order function - Function which operates on another function by taking fn as argument or by returning fn.
// filter
// map
// reduce
// sort
// forEach

// undefined vs not defined
// undefined - Exists in memory but with undefined
// not defined - Doesn't exists in memory

// Before execution js engine gives some space in memory - Global execution context - Key and value form + predefined func or something
// Function from global context, it goes into call stack

// Curring in javascript
function addition(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

// var result = addition(3);
// var data = result(5);
// var data2 = data(5);
// console.log(data2);

var res = addition(3)(9)(5); // using curring
console.log(res);

// Infinite curring
function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}

console.log(add(2)(5)(8)(3)());

// Debouncing
let count = 0;
function getData() {
  console.log("Fetching data", count++);
}

function myDebounce(callback, t) {
  return function () {
    if (t) clearTimeout(t);
    setTimeout(() => {
      getData();
    }, t);
  };
}

const betterFunc = myDebounce(getData, 1000);

// Throttling same as debouncing

// DOM traversing
// const h1 = document.querySelector('h1');

// Going downwards: child
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'orangered';

// Going upwards: parents
// console.log(h1.parentNode)
// console.log(h1.parentElement);

// h1.closest('.header');

// Going sideways: siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.nextSibling);
// console.log(h1.previousSibling);

// For all siblings : parent + child
// console.log(h1.parentElement.children);

// Lifecycle DOM events
document.addEventListener("DOMContentLoaded", function (e) {
  console.log("HTML parsed and DOM tree built!!", e);
});

window.addEventListener("load", function (e) {
  console.log("Page fully loaded!!", e);
});

// window.addEventListener('beforeunload', function(e) {
//     e.preventDefault();
//     console.log(e);
//     e.returnValue = '';
// });
