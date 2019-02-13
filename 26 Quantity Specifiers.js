//regular expressions
//Quantity specifiers {}

//match any number of patters betwee
/*
Specifying the upper and loower number of pattern matches
using quantity specifiers
-put two numbers in between the  {lower, upper}
-/match any pattern of "Ohh no" where the number of h's is between 3 and 6 h's
-always match the letter O
-match the letter h if there are between three and 6 h's
-also matching the the space then no 
*/

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/;
let result = ohRegex.test(ohStr)

console.log(result);