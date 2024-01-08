/**
 * Storage is not the concepts of javascript, it's a concepts of browser or web APIs
 */

// ------------------------------------------- Cookies -----------------------------------
// to set cookie
// document.cookie= "username=vikash";

// to access cookie in string format
// console.warn(document.cookie);

// ---------------------------------- Local Storage ---------------------------
// * localStorage has no expiry date it will be always

// To set data
localStorage.setItem("fname", "vikash");

// To read data
// localStorage.getItem('fname');

// To remove data
// localStorage.removeItem('fname');

// To clear localstorage
// localStorage.clear();

// -------------------------------------------- Session storage ------------------------------
// * sessionStorage has expiry date it will be destroy after closing browser
// To set data
sessionStorage.setItem("nameKya", "vikash");

// To get data
// sessionStorage.getItem('nameKya');
// let name = localStorage.getItem('Name2');
// name = JSON.parse(localStorage.getItem('Sabzi'));
// console.log(name)

// To remove data
// sessionStorage.removeItem('nameKya');

// To clear sessionStorage
// sessionStorage.clear();
