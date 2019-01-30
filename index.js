//Regular Expressions
//Regular Expressions are use in programming languages to match parts of strings
let sentence = "The dog chased the cat."
//we want to know if the world the is in the sentence variable
//put word you want to search in between two foward slashes
//notice there are no quotes around the word
let regex = /the/


let myString = "Hello, World!";
let myRegex = /Hello/;

//use the test method, applies it to a string and return true if there is an exact patter math
//we're going to test if the Regex, /Hello/is in the variable myString and store that information in the variable result
let result = myRegex.test(myString); 

//console log variable result, will return true if there is a pattern match
console.log(result);