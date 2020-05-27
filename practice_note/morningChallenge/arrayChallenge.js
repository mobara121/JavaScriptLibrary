/*
Challenge (Arrays):
Color List:
Create a function that can take in arrays.
Create an array of colors
Create an array of suffixes for placement (i.e. st (for 1st), nd (for 2nd), rd (for 3rd), etc)
In the function, filter through both arrays and print out the placement and the color for each individual colors (i.e. 1st is green, 2nd is blue, 3rd is red, 4th is orange, etc) until all of the colors are listed out with the appropriate placement.
Not to make it too hard on yourself, you can stop the count at ten
*/

let color = ["green", "blue", "red", "orange"]
let suffixe = ["st", "nd", "rd", "th"];
    suffixe.forEach(function(item){
        console.log(item);
    })

for (const placement in suffixe) {
    console.log(placement);
}


for(let i = 0; i<4; i++){
    console.log(suffixe[i],color[i]);
}

//answer
let colors = [
    "red", 
    "orange", 
    "coral", 
    "yellow", 
    "green", 
    "teal", 
    "blue", 
    "indigo", 
    "violet", 
    "black"
];

let suffix = ["st", "nd", "rd", "th"];

function printOrder (items, endings){
    // For loop solution
  for (let i = 0; i < items.length; i++) {
    console.log(`${items[i]} is ${i + 1}${i >= 3 ? endings[3] : endings[i]}`);
  }
}
printOrder(colors, suffix);

  // ForEach loop solution
  //items.forEach((value, i) => {
   // console.log(`${value} is ${i + 1}${i >= 3 ? endings[3] : endings[i]}`);
  //});
//}
​
//printOrder(colors, suffix);
