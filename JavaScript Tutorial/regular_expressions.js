// ----------------------------------------- Regular expression ----------------------------------
// let str = 'vikash is a something';
// var reg = /vikash/; // we always write regEx btw / and /

// reg.exec(str) ? console.log('found'): console.log('Not found');

// Metacharacters
let regex = /harrsdfgy/;
// Lets look into some Metacharacters symbols
// regex = /^harrdc/; // ^ means expression will match if string starts with
// regex = /harry$/; // $ at the end of the string means "string ends with"
// regex = /h.rry/; //matches any one character
// regex = /h*rry/; //matches any 0 or more characters
// regex = /ha?rryi?t/; //? after character means that character is optional
// regex = /h\*rry/; // '\' to escape the metachar, metachar will be as a normal string

// let str = "h*rry means codewith"; //

// let result = regex.exec(str);
// console.log("The result from exec is ", result);

// if(regex.test(str)){
//     console.log(`The string ${str} matches the expression ${regex.source}`);
// }
// else{
//     console.log(`The string ${str} does not match the expression ${regex.source}`);
// }
