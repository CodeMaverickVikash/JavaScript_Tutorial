/**
 * an event is an action or occurrence that happens in the browser — such as:
A user clicks a button
A page loads
A key is pressed
The mouse moves over an element
A form is submitted
 */

// --------------------------- Custom event ---------------------------
// This is useful when you want different parts of your application to communicate with each other in a decoupled way.
// Real-World Example: Modal Component - Suppose you want to notify other parts of the app when a modal is opened.
// Inside modal.js
function openModal() {
  document.getElementById("myModal").style.display = "block";
  let customEvent = new CustomEvent("modalOpened", {
    detail: { modalId: "myModal" }
  });
  document.dispatchEvent(customEvent);
}

// Now other components can react:
document.addEventListener("modalOpened", function (e) {
  console.log("Modal opened:", e.detail.modalId);
});

// --------------------------- Event object -----------------------------
document.getElementById("heading").addEventListener("click", function (e) {
  let variable;
  // variable = e.target;
  // variable = e.target.className;
  // variable = Array.from(e.target.classList);

  // variable = e.target.id;
  // variable = e.offsetX;
  // variable = e.offsetY;
  // variable = e.clientX;
  // variable = e.clientY;
  console.log(variable);
});

// ----------------------------------- bind Events on element ------------------------------------
// Events - click, dblclick, mousedown
let btn = document.getElementById("btn");
btn.addEventListener("click", callback);
btn.addEventListener("dblclick", callback);
btn.addEventListener("mousedown", callback);

const noElem = document.querySelector(".no");
noElem.addEventListener("mouseenter", callback);
noElem.addEventListener("mouseleave", callback);

function callback(e) {
  console.log("Thanks", e);
  e.preventDefault(); // it prevent from going another page
}

const containerElem = document.querySelector(".container");
containerElem.addEventListener("mousemove", function (e) {
  console.log(e.offsetX, e.offsetY);
  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetX},154)`;
  console.log("You triggered mouse move event");
});

// ---------------------- Event bubbling and capturing ---------------------
// Stop propagation, Immediate propagation and prevent default

var div = document.querySelector("div");
var button = document.querySelector("button");

div.addEventListener("click", function () {
  console.log("div");
});

// Button ka kam jo bhi honga use chala do, parent per jane ki jarurat nhi hai - e.stopPropagation() - don't propagate
button.addEventListener("click", function (e) {
  e.stopPropagation();
  console.log("button");
});
// prevent default
document.querySelector("a").addEventListener("click", function (e) {
  e.preventDefault();
  console.log("a");
});

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

var h3Demo = document.querySelector(".demo");
h3Demo.style.border = "2px solid red";

document.getElementsByClassName("demo"); // it will HTMLCollection
document.querySelector(".demo"); // it will return first selected element

// Creating element
const domElement = document.createElement("div"); // createElement('tagName')
// domElement.innerText = 'Hello jorge!';
domElement.textContent = "Hello ranjha!";
domElement.innerHTML = "<p>You are my love!</p><h3>Do not fall into it.</h3>";
domElement.classList.add("demo");
domElement.id = "How";
// domElement.className = 'demo';
console.log(domElement);

// h3Demo.prepend(domElement);
// h3Demo.append(domElement);

// h3Demo.before(domElement);
h3Demo.after(domElement);

// Deleting element
h3Demo.addEventListener("click", function () {
  // this.remove();
  this.parentElement.removeChild(this);
  console.log(this);
});

// Attribute
h3Demo.setAttribute("id", "ok");
console.log(h3Demo.getAttribute("id"));
console.log(h3Demo.id);

// Classes
h3Demo.classList.add("hum", "you");
h3Demo.classList.remove("hum", "you");
// h3Demo.classList.toggle('hum');
// h3Demo.classList.contains('hum');

// Don't use
// h3Demo.className = 'Jonas';

// --------------------------------------- contextmenu event -------------------------------------------
window.addEventListener("contextmenu", (e) => console.log("Right clicked"));

// submit event on form
const form = document.querySelector("#myForm");
form.addEventListener("submit", function (event) {
  // support more than previous approach
  event.preventDefault();
  console.log(document.myForm);
  console.log(event.target.elements.username.value);
});

// -------------------------------------- LifeCycle DOM event -----------------------------------------
document.addEventListener("DOMContentLoaded", function (e) {
  console.log("HTML parsed and DOM tree built!", e);
});

window.addEventListener("load", function (e) {
  console.log("Page fully loaded", e);
});
