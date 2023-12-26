// Useful window method: alert, confirm, prompt, document, innerHeight, innerWidth, scrollX, scrollY, location, history

window; // windows object is globel in js

window.alert("This is vikash"); // can be written like this
alert("This is vikash"); // also can be written like this

let a = window.document; // document is the part of window object
a = prompt("Type your name");
a = confirm("Are you sure");
a = window.innerHeight;
a = window.innerWidth;
a = scrollX;
a = scrollY;
a = location;
a = location.toString();
a = window.history;
console.log(a);

// Understanding DOM and creating website layout - dom has tree structure
a = document;
a = document.all;
a = document.body;
a = document.forms;
Array.from(a).forEach((element) => {
  console.log(element);
});
a = document.links;
a = document.links[0];
a = document.links[0].href;
console.log(a);

// use document.images and document.scripts and print the list of images and scripts on an html page
