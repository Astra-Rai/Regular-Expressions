//Regular Expressions - Match Literal Strings
//Regular Expressions are use in programming languages to match parts of strings

//Where is Waldo?

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";

//here we want to find the word Waldo, this is case sensitive
let waldoRegex = /Waldo/;

/*test method is used to find the string Waldo
within the variable that contains the string
"Somewhere Waldo is hiding in this text"
*/

let result = waldoRegex.test(waldoIsHiding);

//should return true
//would return false if the 'w' in waldo was lower case
console.log(result);