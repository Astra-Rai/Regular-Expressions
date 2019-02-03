//Regular expressions
//Matching beginning string patterns
//use carrot ^ character to match word a beginning of string 

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/

//RegExp.prototype.test()

//The test() method executes a search for a match between a regular expression and a specified string. Returns true or false.

let result = calRegex.test(rickyAndCal);
console.log(result); //->true