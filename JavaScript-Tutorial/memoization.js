/**
 * Memoization is an optimization technique where the results of expensive function calls are stored and returned when the same inputs occur again.
 */

let langCaches = {
    ok: 'thik che'
};

function getValue(key) {
    // make API call with key to get value from server
    console.log("getValue called");
    return key + 12;
}

function get(key) {
    if (langCaches[key]) {
        return langCaches[key];
    }
    // complex logic
    langCaches[key] = getValue(key);

    return langCaches[key];
}

console.log(get('ok'));
console.log(get('ok'));
console.log(get('ok'));
console.log(get('good'));
console.log(get('good'));
console.log(get('good'));