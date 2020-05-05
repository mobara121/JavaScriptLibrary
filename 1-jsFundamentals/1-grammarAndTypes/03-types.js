//Boolean
let on = true;
console.log(on);

let off = false;


//
let stringOne = 'single quotes';
let stringTwo = "double quotes";
let stringThree = `backticks`;

console.log(stringOne, stringTwo, stringThree);

let first = 1050 + 100;
let second = "1050" + "100";
console.log(typeof first);
console.log(typeof second);

let myName = "O'Bara";
console.log(myName.length);

console.log(myName.toUpperCase());

let home = "My home is greenwood";
console.log(home.includes("greenwood"));

let sent = 'This sentence will be split into individual parts';
console.log (sent.split(""));

var x = "outside";
console.log(x);

{
    var x = "inside";
    console.log(x);
}
console.log(x);

console.log(x)
var x = 7;
console.log(x)


var x ="Romeo";
{
    var x = "Juliet";
    let y = "Romeo";
}
console.log(x,y);

const x ="Romeo";
{
    var x = "Juliet";
    let x = "Juliet";
}
console.log(x);

let x = "Romeo";
{
    var x = "Juliet";
    let x = "Juliet";
}
console.log(x);

let x = 19;
console.log(x);
x = "tree";
console.log(x);

let x = "Romeo";
console.log(x);
let x = true;
let y = 20;
console.log(typeof x, typeof y);