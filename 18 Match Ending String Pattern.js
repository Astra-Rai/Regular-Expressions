//Regular expressions
//Matching beginning string patterns
//use $ to match word at end of string 

let caboose = "The last car on a train is the caboose";//stre string in the variabe let caboose
let lastRegex = /caboose$/; //if caboose is a word at the end of the string, test
let result = lastRegex.test(caboose);//use  test() to check if the word caboose is at the end of the string stored in the variable caboose
console.log(result); //->true, caboose is the last word in the string



//RegExp.prototype.test()

//The test() method executes a search for a match between a regular expression and a specified string. Returns true or false.