//Regular Expressions
//Specify Only Lower Number of Matches
//Quanity Specifiers
//{upper, lower}



let haStr = "Hazzzzah";
let haRegex = /z{4,}/;//match if there are four or more of the letter z
//nothing after the comma, means there is an infintie number of that can be listed in match


// Change this line
let result = haRegex.test(haStr);
console.log(result);