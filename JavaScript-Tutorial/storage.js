/**
 * Storage is not the concepts of javascript, it's a concepts of browser or web APIs
 * cookies, localStorage, and sessionStorage are three ways to store data on the client (browser). Each has different characteristics and use cases.
 */

// ------------------------------------------- Cookies -----------------------------------
/**
 * A small piece of data (max ~4KB) stored in the browser and sent to the server with every HTTP request.

✅ Use Cases:
    Storing authentication tokens (e.g., JWT)
    Managing session IDs
    Remember me functionality
    Server-side reading/tracking
 */

// document.cookie= "username=vikash";

// to access cookie in string format
// console.warn(document.cookie);

// ---------------------------------- Local Storage ---------------------------
// * localStorage has no expiry date it will be always
/**
 * A web storage mechanism that allows you to store data persistently, even after the browser is closed.
 * ✅ Use Cases:
    Saving user preferences (theme, layout)
    Saving app state
    Caching data for offline access
    Can store up to 5–10 MB
 */

// To set data
localStorage.setItem("fname", "vikash");

// To read data
// localStorage.getItem('fname');

// To remove data
// localStorage.removeItem('fname');

// To clear localstorage
// localStorage.clear();

// -------------------------------------------- Session storage ------------------------------
/**
 * Similar to localStorage, but data is cleared when the tab or window is closed.
✅ Use Cases:
    Temporary storage for a single session
    Form data or navigation state
    Multi-tab isolation
 */
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
