let long = [1,2,3,4,5,6,7,8,9,10];
console.log(long.length);
//10

let colors = ["blue","green","yellow","red","orange","purple",];
console.log(colors.length);
//6
console.log(colors.toString());
//blue,green,yellow,red,orange,purple
console.log(typeof colors);
//object

/*
CHALLENGE
************
​
    - First check if you are working with an array
    - Using a method, flip the values within the array (what was in index 4 is now in 0, 3 to 1, etc.)
    - Using a method, print the values of the newly arranged array
*/

let colors = ["blue","green","yellow","red","orange","purple",];


console.log(colors instanceof Array);
//true
colors.reverse();
console.log(colors);
//[ 'purple', 'orange', 'red', 'yellow', 'green', 'blue' ]
colors.forEach(colors => console.log(colors));
/*
purple
orange
red
yellow
green
blue
*/

(colors instanceof Array) ? console.log(colors.reverse()) : console.log("Not an Array");
colors.forEach(name => console.log(name));
/*
blue
green
yellow
red
orange
purple
*/

if(colors instanceof Array){
    let newArr = colors.reverse();
    newArr.forEach(color => console.log(color));
} else {
    console.log("Not an array!");
}

// using the forEach method, capitalize the first letter of each color, then lowercase the rest.
​
let colors = ["BlUe", "grEeN", "yElLoW", "REd", "oRanGe", "pURPle"];
​
colors.forEach(color => {
    let newColor = color[0].toUpperCase() + color.slice(1).toLowerCase();
    console.log(newColor);
});










let colors = ["Blue","grEen","yElLow","REd","oRanGe","pURPle",];

colors.forEach(color => console.log(color[0].toUpperCase() + color.slice(1).toLowerCase())

if(colors instanceof Array){
    let newArr
}
