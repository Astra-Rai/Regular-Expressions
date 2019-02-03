//Regular expressions
//Find one or more criminals in a hunt
//Write a Regex function to match one or more C's

let crowd = 'P1P2P3P4P5P6CCCP7P8P9';

let reCriminals = /C+/; 

let matchedCriminals = crowd.match(reCriminals);
console.log(matchedCriminals);