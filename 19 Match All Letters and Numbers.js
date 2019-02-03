//Regular expressions
//Match All Letters and Numbers
//Shorthand character class
//, /\w/Matches a - z, A-z, 0-9 and underscores
//g, match every occurrence
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; 
let result = quoteSample.match(alphabetRegexV2).length;
//length does not include the space and period (full stop)
console.log(result);

//Searches an input string for a substring that matches a regular expression pattern and returns the first occurrence as a single Match object