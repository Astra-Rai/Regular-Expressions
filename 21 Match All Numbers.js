//Regular Expressons
//Match All Numbers
//d, will match all digits
//g, stands for global


let numString = "Your sandwich will be $5.00";
let numRegex = /\d/g; // Change this line

//for the  contents in the variable, numString, match all digits
//.length will provide the numbee of digital, withinin the variable, numString, num strings contains 3 digitas
let result = numString.match(numRegex).length;
console.log(result);// -> 3