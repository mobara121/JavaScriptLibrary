//      keyword     name     parameter(s)
function    hi       (name) {
    console.log(`Hi, ${name}`);
}
​
hi('Jerome');
hi(800);
​
​
/*
CHALLENGE
************
- Write a function that takes two parameters:
- one parameter is for a first name,
- the other parameter is for a last name;
- have them come together in a variable inside the function.
- console.log 'Hello, my name is <your name>'
- call (or invoke) your function
*/

function name(first, last){
    console.log(`Hello, my name is ${first} ${last}.`);
}
name('Romeo', 'Obara');
​
function hello(firstName, lastName) {
console.log(`Hello, my name is ${firstName} ${lastName}`);
}
​
hello('Justin', 'Brummett');