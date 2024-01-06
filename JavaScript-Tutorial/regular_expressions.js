// ----------------------------------------- Regular expression ----------------------------------
/**
 * Regular expressions are objects that represent patterns in strings. They are used for matching character combinations in strings and for performing search and replace functions. Regular expressions consist of normal characters and special characters known as metacharacters.
 * Regular expressions in JavaScript are created using the 'RegExp' constructor or a literal syntax between forward slashes (/pattern/).
 * You can use regular expressions with various string methods, such as test(), exec(), match(), replace(), and split(), to perform pattern matching and manipulation on strings.
 */

// Metacharacters - Please have a look into images for more info. Location - /images
let regex = /harrsdfgy/;
// Lets look into some Metacharacters symbols
// regex = /^harrdc/; // ^ means expression will match if string starts with
// regex = /harry$/; // $ at the end of the string means "string ends with"
// regex = /h.rry/; //matches any one character
// regex = /h*rry/; //matches any 0 or more characters
// regex = /ha?rryi?t/; //? after character means that character is optional
// regex = /h\*rry/; // '\' to escape the metachar, metachar will be as a normal string

let str = "h*rry means codewith"; //

console.log(/vikash/.exec("vikash is good"));

console.log(regex.test(str));
if (regex.test(str)) {
  console.log(`The string ${str} matches the expression ${regex.source}`);
} else {
  console.log(
    `The string ${str} does not match the expression ${regex.source}`
  );
}
