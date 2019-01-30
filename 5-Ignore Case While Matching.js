//Regular Expressions
//Ignore Case While Matching
//Using the i flag

let myString = "freeCodeCamp";

//match both cases using a flag
//i means ingore case 
//notice there are two upper case C's is freeCodeCamp
let fccRegex = /freecodecamp/i; // <--notice the i flag
let result = fccRegex.test(myString);
console.log(result);