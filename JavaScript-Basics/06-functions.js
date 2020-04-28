function hello() {
    console.log("Hello World!");
}
hello();
hello();

function pacersWon() {
    console.log("Pacers won!");
}
pacersWon();

function addAnyTwoNumbers(x, y){
    console.log(x + y);
}
addAnyTwoNumbers(4, 5)
addAnyTwoNumbers(6, 11)
addAnyTwoNumbers(7, 8)

function subtractTwoNumbers(firstNum, secondNum) {
    console.log(firstNum - secondNum);
}

subtractTwoNumbers(5, 7);

function getMyBattingAverage(atBats, numberOfHits) {
    let myAverage = numberOfHits / atBats;
    return myAverage;
}
console.log(getMyBattingAverage(250, 91));
console.log(getMyBattingAverage(1,4))

function add(x, y){
    let sum = x + y;
    return sum; // Or return x + y;
}
console.log(add(3, 1)); 

function subtract(a, b) {
    console.log(a-b);
}
subtract(10, 7);

function pricePlusTax(a, b){
    let calculate = a * b *1.07;
    return calculate;
}
console.log(pricePlusTax(3, 50));
console.log(pricePlusTax(2, 50));

function pacersWon(){
    console.log("Pacers won!");
}
pacersWon();
pacersWon();
pacersWon();
pacersWon();
pacersWon();