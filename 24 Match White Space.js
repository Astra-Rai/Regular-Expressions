//REgular Expressions 
//Match White Space

// \s, select all white space
//g, flag
//g is for global search. Meaning it'll match all occurrences. You'll usually also see i which means ignore case. The "g" flag indicates that the regular expression should be tested against all possible matches in a string.

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; //s, to match white space, g, globally



let result = sample.match(countWhiteSpace);
console.log(result);// -> [" ", " ", " ", " ", " "]