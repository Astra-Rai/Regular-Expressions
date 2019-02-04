//Regular Expressions
//Match Everything But Letters and Numbers
// /w matches all letters are number
// /W, match  what is not letters, numbers or underscores...does this match spaces? Yes, spaces are noted with .length
//g flag to match every single occurance

let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g;

//The match() method retrieves the result of matching a string against a regular expression.

let result = quoteSample.match(nonAlphabetRegex).length;
console.log(result);