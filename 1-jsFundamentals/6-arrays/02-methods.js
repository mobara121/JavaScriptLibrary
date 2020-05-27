let food = ["Pecan pie", "Shrimp", "Quesadilla", "Cheese Cake", "Hotdog"];

/*for(let foodItem in food){
    console.log(foodItem);
}
*/

for(let foodItem of food){
    console.log(foodItem);
}


food.push("pizza");
//console.log(foodItem);

food.splice(1, 1, "Tacos");
//console.log(food);

let removedFood = food.pop()
console.log(removedFood);
​
food.unshift("Burritos");
console.log(food);