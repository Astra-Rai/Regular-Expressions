//Regular Expressions

let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
//match g
//the match an o zerp or more times
let goRegex = /go*/;
soccerWord.match(goRegex); // Returns ["goooooooo"]
gPhrase.match(goRegex); // Returns ["g"]
oPhrase.match(goRegex); // Returns null

let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
//match A zero or one times, a
//capital a
//lowercase a should be matched by use of *
let chewieRegex = /Aa*/; // Change this line
let result = chewieQuote.match(chewieRegex);

console.log(result); //-> ["Aaaaaaaaaaaaaaaa"]