//Regular Expressions
//Specify Exact Number of Matches
//Quanity Specifiers




let timStr = "Timmmmber";

//we want to test for the word Timber, but with exactly 4 m's
let timRegex = /Tim{4}ber/; 
let result = timRegex.test(timStr);

console.log(result);//->true