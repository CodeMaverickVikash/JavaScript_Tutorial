/*
 * Callbacks - get call when something heppen
 * promises - used to handle async task (which may take time to complete)
 * async & await -used to make synchronus
 * Asynchronus - Sequence not defined
 * Synchronus - Sequence decided
 */

// -------------------------------------------- Promise --------------------------------------
// Promises - Promises are used to handle asynchronous operations in JavaScript. - it has three stages 1) Pending 2) Fullfilled 3) Rejected
/* Promise()         ------- it will take condition
   /     \
  /       \
resolve()  reject()
/           \
/              \
then()           catch()         ---------Both are callback function */

function fetchUser() {
  return new Promise(function (resolve, reject) {
    console.log("Fetching data, please wait."); // it is in pending state
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resolve(resp))
      .catch((err) => reject("Failed to load json data.", err));
  });
}
console.log("Hello");
fetchUser()
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.log(error);
  });
console.log("Hi"); // may it can run before - sync call

// --------------------------------------------- Async and Await --------------------------------
// Async & Await - it works only with promise
// fetch method always return a promise
async function fetchUserData() {
  let resp = await fetch("https://jsonplaceholder.typicode.com/users"); // The keyword await makes JavaScript wait until that promise settles and returns its result.
  let jsonData = await resp.json();
  console.log(jsonData);
}
fetchUserData();
