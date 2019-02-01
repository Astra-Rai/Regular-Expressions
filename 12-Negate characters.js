//Regular Expressions
//Negate charcter sets


let quoteSample = "3 bind mice.";

//negated character sets created using the carrot character
//create a myRegex that doesn't select all numbers and all vowels
//^ carrot will match nums 0 - 9 and vowels aeiou 
//i flag, match is case insensitive
//g, flag matches every occurrance in string

let myRegex = /[^0-9aeiou]/ig; 
//match according to data stored in the variable myRegex
let result = quoteSample.match(myRegex); 
//return, no numbers, no vowels
console.log(result); //-> [" ", "b", "l", "n", "d", " ", "m", "c", "."]