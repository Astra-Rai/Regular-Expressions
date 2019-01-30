//Regular Expressions
//Find More Than the First Match

let testStr = "Repeat, Repeat, Repeat";
//g flag
//this will only return first repeat
//let ourRegex = /Repeat/;

//this will note multiple occurrences 
//this will retrun an array with three elements
//let ourRegex = /Repeat/g;
//result = testStr.match(ourRegex);
//console.log(result);// -> ["Repeat", "Repeat", "Repeat"];
//let twinkleStar = "Twinkle, twinkle, little star";
//let starRegex = /change/;
///let result = twinkleStar; 

//console.log(result);
//i flag notes the repeat
//g flag makes the search insensitive to case
//notice use of more than one flag
//notice first twinkle is capitalized and second is not
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/ig;
let result = twinkleStar.match(starRegex); 

console.log(result);// -> ["Twinkle", "twinkle"]