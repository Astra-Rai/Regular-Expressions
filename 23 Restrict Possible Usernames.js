//Regular Expressons
//Restrict Possible Usernames

//Create a Regex that can be used as a username validator
//Ruels

/*
1) If there are numbers, they must be at the end.
2) Letters can be lowercase and uppercase.
3) At least two characters long. 
Two-letter names can't have numbers.
*/ 
//{}//number of times the pprevious thing can match, 2 is the minimum number of matches
//rnamewill start with two letters
// \d* is for digits to match, *= zero of more numbers
//note, no numbes are at end of string, username
//if numbers were in string and not at end the test would return false
//$, means that the numbers will be at the end
//2, <--no number after comma can use an infinite amount of letters 
let username = "JackOfAllTrades";
let userCheck = /^[A-Za-z]{2,}\d*$/; 
let result = userCheck.test(username);
console.log(result); //-> true