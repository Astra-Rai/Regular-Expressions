//Regular Expressions
//Match Anything with Wildcard Period
//a period is a wildcard character and can stand for anything


//let humStr = "I'll hum a song";
//let hugStr = "Bear hug";
//the wildcard period, in this cas selects any word beginning with n hu....
//let huRegex = /hu./;
//let result1 = humStr.match(huRegex); // Returns ["hum"]
//let result2 = hugStr.match(huRegex); // Returns ["hug"]

let exampleStr = "Let's have fun with regular expressions!";
//Regex, match any word in sentence, word that ends in "un"
let unRegex = /.un/;

let result = unRegex.test(exampleStr);

//console.log(result1);
//console.log(result2);


//let exampleStr = "Let's have fun with regular expressions!";
//let unRegex = /.un/;
//let result = unRegex.test(exampleStr);
//should  return true
console.log(result);