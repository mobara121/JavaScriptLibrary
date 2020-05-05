function hi() {
    console.log('HI');
}
​
hi;
hi();
console.log(hi);
console.log(hi());
​
​
/*
CHALLENGE
************
    - Create a function that, when invoked, lists out the numbers 1-10
*/
​
function oneToTen() {
    for(let i = 0; i <= 10; i++){
        console.log(i);
    }
};
​
oneToTen();

function oneToTen(){
    for(let i =0; i<=10; i++){
        console.log(i);
    }
};

oneToTen();
​
​
/*
CHALLENGE
************
    - Given the array, create a function that console.log's the values individually.
*/
let arr = [];
function animals() {
    for(let item of arr){
        console.log(item);​
    };
}
animals();

let arr = ['This', 'is', 'really', 'cool'];
​
function call() {
    for(let item of arr){
        console.log(item);
    }
};
​
call();

let arr = ['cat', 'dog', 'deer'];
function animals(){
    for(let item of arr){
        console.log(item);
    };
};



