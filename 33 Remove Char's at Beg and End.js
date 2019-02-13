//Regular Expressions

//Remove whitespace from start to end of string
//^, start at the beginning
// \s, removes whitespace, s+, 
// | , pipe character means or
//$, at the end
//g,flag, The g means Global, and causes the replace call to replace all matches, not just the first one.
//+ to get any number of white space characters?




let hello = "   Hello, World!  ";

//write a Regex that finds all the space at the begining and end
let wsRegex = /^\s+|\s+$/g; // Change this line
//replace method syntax
//str.replace(regexp|substr, newSubstr|function)
let result = hello.replace(wsRegex, ''); 

console.log(result);//-> "Hello, World!"

/*

The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. If pattern is a string, only the first occurrence will be replaced.

*/