//Regular Expressions
//Matching a range of letters, match letters of the alphabet

let quoteSample = "The quick brown fox jumps over the lazy dog.";
//match every letter between a and z
//i, matches every upper and lowercase letter
//g, make sure every letter is matched in the string
let alphabetRegex = /[a-z]/ig; 
let result = quoteSample.match(alphabetRegex); 

console.log(result);
/*
Retures every letter in strng quoteSample

["T", "h", "e", "q", "u", "i", "c", "k", "b", "r", "o", "w", "n", "f", "o", "x", "j", "u", "m", "p", "s", "o", "v", "e", "r", "t", "h", "e", "l", "a", "z", "y", "d", "o", "g"]
*/