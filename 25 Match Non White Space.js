//Regular Expressions
//S,Match Non White Space Characters
//g, global searc, match every instance, even if character repeats


let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\S/g; // Change this line
let result = sample.match(countWhiteSpace);
//Expected output:
/*["W", "h", "i", "t", "e", "s", "p", "a", "c", "e", "i", "s", "i", "m", "p", "o", "r", "t", "a", "n", "t", "i", "n", "s", "e", "p", "a", "r", "a", "t", "i", "n", "g", "w", "o", "r", "d", "s"]
*/
console.log(result);