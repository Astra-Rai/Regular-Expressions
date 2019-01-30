//Regular Expressions
//Extract Matches

let extractStr = "Extract the word 'coding' from this string.";

let codingRegex = /coding/; 
//extract the word 'coding' and store in the result variable
//the wording coding is stored in the let codingRegex variable
let result = extractStr.match(codingRegex); 
//instead of return true of false as in lessons 1 -5, 
//the extracted word, 'coding', is now housed in the result variable
//there for the output is ["coding"]
console.log(result);// -> ["coding"]