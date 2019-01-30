//Regular Expressions
//OR Operator

let petString = "James has a pet cat.";
//use OR operator to match for serval words
let petRegex = /dog|cat|bird|fish/;
let result = petRegex.test(petString);
//will return true because word "cat" is in the variable petString
console.log(result);