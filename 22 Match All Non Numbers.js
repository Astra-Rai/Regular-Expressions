//Regular Expressons
//Match All Numbers
// \D, the capitalized D will match all non numbers
//g, stands for global

let numString = "Your sandwich will be $5.00";

let numRegex = /\D/g; 
//for the  contents in the variable, numString, match all non numbers
//.length will provide all the non numbers within the , withinin the variable, numString, num strings contains 24 non number characters
//The match() method retrieves the result of matching a string against a regular expression.

let result = numString.match(numRegex).length;
console.log(result);// -> 24