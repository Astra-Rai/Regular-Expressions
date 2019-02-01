//Regular Expressions
//Matching Characters that Occur More than One Time

let difficultSpelling = "Mississippi";
//match when s occurs one or more time

let myRegex = /s+/g; 
let result = difficultSpelling.match(myRegex);

console.log(result);//-> ["ss", "ss"]