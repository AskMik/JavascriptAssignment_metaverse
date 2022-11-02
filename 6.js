let myName = "\n A \t at k a    "
console.log("myName", myName);

let myName_withoutWhiteSpaces = myName.replace(/(\r\n|\n|\t| |\r)/gm, '');
console.log("myName_withoutWhiteSpaces",myName_withoutWhiteSpaces); 

