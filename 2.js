let myName = "Aatka";

let lowerCaseName = myName.toLowerCase();
document.write("<br>");
document.write("In lower case:",lowerCaseName);


let upperCaseName = myName.toUpperCase();
document.write("<br>");
document.write("In upper case:",upperCaseName);

// let titleCaseName = myName.toTitleCase();
// document.write("<br>");
// document.write("In title case:",titleCaseName);

function toTitleCase(){ 
    const nameInTitleCase = lowerCaseName.split(' ');
    for (var i = 0; i < nameInTitleCase.length; i++) {
    // Every word of first letter will be upper case and other will be concatenate.
    nameInTitleCase[i] = nameInTitleCase[i].charAt(0).toUpperCase() + nameInTitleCase[i].slice(1);

    return nameInTitleCase;
}
}

let titleCaseName = toTitleCase();
document.write("<br>");
document.write("In title case:", titleCaseName);

