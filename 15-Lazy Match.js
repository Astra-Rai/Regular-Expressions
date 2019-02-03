//Regular expressions


//regex default to greedy
////any letter a -z
//zero or more occurances of a -z
//ending of word i
//?, this is going to be a lazy match
//., fullstop is a wildcard character
//.*, zero or more occurances of any character

let string = "titanic";
let regex = /t[a-z]*i/;//start with t, zero or more occurances of letter, endin in i 
string.match(regex);

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; //returns ["<h1>"]

let result = text.match(myRegex);

console.log(result);