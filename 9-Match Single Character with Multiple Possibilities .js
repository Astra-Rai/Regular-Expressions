//Regular Expressions
//Match Single Character with Multiple Possibilities 

//matching from a predefined group of characters
//inside the brackets...the second letter has to match [a, i, or u]
//first  letter b
//last letter g
//middle letter a, i, or u
//g flag, repeats
//i flag, case insensitive
let bgRegex = /b[aiu]g/ig;

let quoteSample = "Beware of bugs big in the above code; I have only proved it correct, not bag tried it.";

//let vowelRegex = /[aeiou]/ig;//repeats and case flags
let result = quoteSample.match(bgRegex);

console.log(result);

/*console.log(result);
["e", "a", "e", "o", "u", "i", "e", "a", "o", "e", "o", "e", "I", "a", "e", "o", "o", "e", "i", "o", "e", "o", "i", "e", "i"]
*/