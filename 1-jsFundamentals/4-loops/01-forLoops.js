let i = 7;

//     (1)    (2)    (3)
for (i = 0; i < 10; i++){
    console.log(i);
}

console.log(i)

/*
1-initial expression - run once before the loop starts
2-condition - loop runs until the condition evaluates to false
3-increment expression -run after each interation of the loop
*/


//Challenge using a for loop, count to 20, by 2's
for( i = 0; i <= 20; i+=2){
    console.log(i);
}

//Challenge: using a for loop, count from 10 to 0, going down by 1
for( x = 10; x >= 0; x-=1){
    console.log(x);
}
//Challenge: using a for loop, count from 0, going down by 2's to -24
for( x = 0; x >= -24; x -= 2){
    console.log(x);
}

//Challenge: using a for loop, go through a name and display each letter individually
let name = "Mizue";
for(x = 0; x <= name.length; x += 1){
    console.log(name[x]);
}

//Challenge: using a for loop where you add up all the numbers from 1 to 50 (should equal 1275)
let sum = 0;
for ( x = 1; x <= 50; x += 1){
    sum += x;
}
console.log(sum);
/*
we need a variable that was able to be accessed outside the for loop, so we needed to create a global scope variable that we could just add the number of each iteration to that sum variable
if we created the sum variable inside the for loop, everytime the loop ran, it would create a new instance of that variable
*/