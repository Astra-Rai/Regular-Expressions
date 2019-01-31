//Regular Expressions
//Match Numbers and Letters
let quoteSample = "Blueberry 3.141592653s are delicious.";
//match numbers 2 - 6 

//i, match case insitive
//g, match every occurance in string
//match numbers 2-6
//match letters h-s
let myRegex = /[2-6h-s]/ig;
let result = quoteSample.match(myRegex); 

console.log(result);//->["l", "r", "r", "3", "4", "5", "2", "6", "5", "3", "s", "r", "l", "i", "i", "o", "s"]