//Regular Expressions
//Check All or None

//specifiy the possibilr of the existence of a character 
//create a regex that matches both spellings of the word favorite
//favourite, favorite
//use question market ? for searching for charcter that is optional
//check for 0 or 1 of the preceding element

let favWord = "favorite";
let favRegex = /favou?rite/; // //it may have a u or not have a u, but all other letters have to be the same
let result = favRegex.test(favWord);



console.log(result);//->true