const lodash = require("lodash");

var users = [
  { user: "barney" },
  { user: "fred" },
  { user: "vikash" },
  { user: "mayank" },
];

let newUser = lodash.map(users, (userObj) => {
  return {
    name: userObj.user,
    age: 19,
  };
});

let filteredUser = lodash.filter(users, (userObj) => {
  return userObj.user == "vikash";
});

let findUser = lodash.find(users, (userObj) => {
  return userObj.user == "vikash";
});

let userMatches = lodash.some(users, (userObj) => {
  return userObj.user == "vikash";
});

/**
 * The reduce() method in JavaScript can be used to perform a variety of tasks involving the manipulation of arrays. Some common tasks that can be performed using the reduce() method include:

 * Summing the elements of an array
 * Calculating the average of the elements in an array
 * Flattening a multi-dimensional array into a single-dimensional array
 * Counting the occurrences of a particular element in an array
 * Converting an array of objects into an object
 * Filtering an array based on a condition
 * Ref: https://blog.teamtreehouse.com/javascript-array-methods-reduce?utm_campaign=thshorts&utm_source=youtube&utm_medium=social&utm_content=video|JSarrayreduce|YTdescrip&thcampaign=YTV22
 */
const array = [10, 20, 30];

let arraySum = lodash.reduce(
  array,
  (accumulator, currentValue) => {
    // accumulator means calculated values
    console.log({ accumulator, currentValue });
    return accumulator + currentValue;
  },
  (initAccumulatorVal = 0)
);

let numbers = [
    [1, 2],
    [3, 4],
    [5, 6],
  ],
  store;
store = lodash.reduce(numbers, (total, nums) => {
  return total.concat(nums);
});

store = lodash.reduce(
  [1, 2, 3, 4, 5],
  (results, currValue) => results + currValue,
  0
);

store = lodash.reduce(
  [1, 2, 3, 4, 5],
  (results, currValue) => results + currValue,
  0
);

store = lodash.reduce(
  [1, 2, 2, 2, 5],
  (counts, currValue) => {
    if (currValue === 2) {
      counts++;
    }
    return counts;
  },
  0
);

const people = [
  { name: "John", age: 30 },
  { name: "Jane", age: 28 },
  { name: "Jim", age: 32 },
];
store = lodash.reduce(
  people,
  (accumulator, currObj) => {
    accumulator[currObj.name] = currObj.age;
    return accumulator;
  },
  {}
);

console.log({ newUser, filteredUser, findUser, userMatches, arraySum, store });
