//Regular Expressions
//

let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex); // Returns ["goooooooo"]
gPhrase.match(goRegex); // Returns ["g"], becase there is a g character in variable, but no o
oPhrase.match(goRegex); // Returns null because g is a character not found in the variable opharse


let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/; // Returns a capital A and all lowercase a's in variable chewieQuote
let result = chewieQuote.match(chewieRegex);
console.log(result);//["Aaaaaaaaaaaaaaaa"]