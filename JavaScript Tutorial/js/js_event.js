// --------------------------- Custom event ---------------------------
const headerTag = document.getElementById('number');

headerTag.addEventListener('numberChanged', function (e) {
    console.log(e);
    headerTag.textContent = e.detail.number;
    headerTag.style.color = e.detail.textColor;
});

function changeNumber(n, c) {
    const event = new CustomEvent('numberChanged', {
        detail: {
            number: n,
            textColor: c
        }
    });

    // call the event handler
    headerTag.dispatchEvent(event);
}

// --------------------------- Event object -----------------------------
document.getElementById("heading").addEventListener("click", function (e) {
    console.log(e);
    // console.log("You have clicked the heading");
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
    // location.href = '//codewithharry.com'
});


// More on JavaScript Events
// let btn = document.getElementById('btn');
// btn.addEventListener('click', func1);
// btn.addEventListener('dblclick', func2);
// btn.addEventListener('mousedown', func3);

// function func1(e) {
//     console.log("Thanks", e);
//     e.preventDefault(); // it prevent from going another page
// }

// function func2(e) {
//     console.log("Thanks its a double click", e);
//     e.preventDefault();
// }

// function func3(e) {
//     console.log("Thanks its a mouse down ", e);
//     e.preventDefault();
// }

// document.querySelector('.no').addEventListener('mouseenter', function(){
//     console.log('You entered no')
// })

// document.querySelector('.no').addEventListener('mouseleave', function(){
//     console.log('You exited no')
// })

// document.querySelector('.container').addEventListener('mousemove', function (e) {
//     console.log(e.offsetX, e.offsetY);
//     document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetX},154)`;
//     console.log('You triggered mouse move event')
// })


// Smart Page Crawler In JS
// let str = "python";
// let links = document.links;
// // console.log(links);
// let href;
// Array.from(links).forEach(function (element) {
//     href = element.href;
//     if (href.includes(str)) {
//         console.log(href);
//     }
//     else{
//         console.log("hum");
//     }
// });

// ---------------------- Event bubbling and capturing ---------------------
// Stop propagation, Immediate propagation and prevent default

var div = document.querySelector('div');
var button = document.querySelector('button');

div.addEventListener('click', function () {
    console.log('div');
});

// Button ka kam jo bhi honga use chala do, parent per jane ki jarurat nhi hai - e.stopPropagation() - don't propagate
button.addEventListener('click', function (e) {
    e.stopPropagation();
    console.log('button');
});
// prevent default
document.querySelector('a').addEventListener('click', function (e) {
    e.preventDefault();
    console.log('a');
});

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

var h3Demo = document.querySelector('.demo');
h3Demo.style.border = '2px solid red';

document.getElementsByClassName('demo'); // it will HTMLCollection
document.querySelector('.demo');; // it will return first selected element 

// Creating element
const domElement = document.createElement('div'); // createElement('tagName')
// domElement.innerText = 'Hello jorge!';
domElement.textContent = 'Hello ranjha!';
domElement.innerHTML = '<p>You are my love!</p><h3>Do not fall into it.</h3>';
domElement.classList.add('demo');
domElement.id = 'How';
// domElement.className = 'demo';
console.log(domElement)

// h3Demo.prepend(domElement);
// h3Demo.append(domElement);

// h3Demo.before(domElement);
h3Demo.after(domElement);

// Deleting element
h3Demo.addEventListener('click', function () {
    // this.remove();
    this.parentElement.removeChild(this);
    console.log(this);
});

// Attribute
h3Demo.setAttribute('id', 'ok');
console.log(h3Demo.getAttribute('id'));
console.log(h3Demo.id);

// Classes
h3Demo.classList.add('hum', 'you');
h3Demo.classList.remove('hum', 'you');
// h3Demo.classList.toggle('hum');
// h3Demo.classList.contains('hum');

// Don't use
// h3Demo.className = 'Jonas';

// --------------------------------------- contextmenu event -------------------------------------------
$(window).contextmenu(function () {
    console.log('right clicked');
});

// submit event on form
$("#myForm").submit(function (event) { // support more than previous approach
    event.preventDefault();
    console.log(document.myForm);
    console.log(event.target.elements.username.value);
});