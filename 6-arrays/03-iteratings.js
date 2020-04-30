let food = ["Pecan pie", "Shrimp", "Quesadilla", "Cheese Cake", "Hotdog"];

//for (let i = 0; i < food.length; i++) {
//    console.log(food[i]);
//}

//But, this is easy way!! Using 'forEach'
//food.forEach(foodItem => console.log(foodItem));

food.forEach((foodItem, i) => console.log(i, foodItem));

/*
CHALLENGE
************
​
    - (Go look at MDN docs to remind you):
    - Create an array containing movies
    - Use .forEach() to list your movies
    - Add another movie at the end
    - And replace one of your existing movies with another one
*/


let movies = ['ET', 'Avator', 'Starwars', 'Karate kids'];

movies.forEach(movieItem => console.log(movieItem));

movies.push("Moolan");
console.log(movies);

movies.splice(1,2, "Bugs life");
console.log(movies);

movies.forEach((movie,i) => console.log(i, movie));
//This is hard!!