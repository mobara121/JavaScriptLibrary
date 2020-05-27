let i = 7;
​
//    (1)    (2)    (3)
for (i = 0; i < 10; i++){
    // console.log(i);
}
​
console.log(i)
​
/*
1-initial expression - run once before the loop starts
2-condition - loop runs until the condition evaluates to false
3-increment expression - run once after each iteration of the loop
*/
​
//Challenge: using a for loop, count to 20, by 2's
for (x = 0; x <= 20; x += 2){
    console.log(x);
}
​
//Challenge: using a for loop, count from 10 to 0, going down by 1
for (let x = 10; x >= 0; x--){
    console.log(x);
}
​
//Challenge: using a for loop, count from 0, going down by 2's to -24
for (x = 0; x >= -24; x -= 2){
    console.log(x);
}
​
// Challenge: using a for loop, go through a name and display each letter individually
let name = "Donovan";
​
for (let i = 0; i < name.length; i++){
    console.log(name[i]);
}
​
// Challenge: make a for loop where you add up all the numbers from 1 to 50 (should equal 1275)
let sum = 0;
​
for (let i = 1; i <=50; i++){
    sum += i
}
​
console.log(sum);
Collapse




Donovan Triplett  11:39 AM
02-forInLoops.js 
let student = {
    name: "Peter",
    awesome: true,
    degree: "JavaScript",
    week: 1
}
​
for (let item in student){
    console.log(item);
    console.log(student[item])
}
​
let catArray = ["tabby", "british shorthair", "burmese", "maine coon", "rag doll"];
​
for (let cat in catArray){
    console.log(cat);
    console.log(catArray[cat]);
}
​
/*
CHALLENGE
************
​
    - write a for in loop that capitalizes the first letter of a name, and lowercases the rest of the name
*/
​
let name = "dOnOvAn";
let capName;
​
for (let l in name){
    if (l == 0) {
        capName = name[l].toUpperCase();
    } else {
        capName += name[l].toLowerCase(); 
    }
}
​
console.log(capName);
Collapse


var sum = 0;

for (var x =1 ; x<=50; x++){
    sum += x
}
console.log(x);


var friends = ["Romeo", 5, "dog"]

console.log(friends[2]);

var friends = {
    name: '佐藤',
    age: 32,
    address: '東京都新宿区',
    '趣味': 'プログラミング',
    nationality: ""
}

for( var list in friends ) {

    // 不要なプロパティは除外する
    if( friends.hasOwnProperty( list ) ) {

        console.log( list + ': ' + friends[list] );

  }

}
let count = 0;
for (; count<9; j++){
    console.log(j + "")
}
















Message #instructorcode

