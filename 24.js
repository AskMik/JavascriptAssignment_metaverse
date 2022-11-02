
// • Tests for equality and inequality with strings
let myName = 'Aatka';

console.log(myName == 'Aatka');
console.log(myName != 'Adina');

// • Tests using the lower case function
let my_name = 'sharmeen';

console.log(my_name == 'Sharmeen');
console.log(my_name == 'sharmeen');

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num = 5;

console.log(num == 5);  //equality
console.log(num != 5);  //inequality

console.log(num > 7);   // greater than
console.log(num < 7);   // less than

console.log(num >= 7);  //greater than or equal to
console.log(num <= 7);  //less than or equal to


// • Tests using "and" and "or" operator
let num2 = 10;

console.log(num2 == 10 && typeof num2 == String);
console.log(num2 < 15 || num < 5);

// • Test whether an item is in a array
let array = ['red', 'blue', 'green'];

console.log(Array.isArray(array));

// • Test whether an item is not in a array
let simple_variable = 'Tubelight';

console.log(Array.isArray(simple_variable));