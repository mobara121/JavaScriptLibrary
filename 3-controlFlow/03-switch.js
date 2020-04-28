let officeCharacter = "Pam";

switch (officeCharacter){
    case "Michael":
        console.log("My mind is going a mile an hour");
        break;
    case "Dwight":
        console.log("Perfectenschlag");
        break;
    case "Jim":
        console.log("Bears. Beets. Battlestar Galactica");
        break;
    default:
        console.log(`I'm sorry, ${officeCharacter}, but do I know you`);
}

/*
CHALLENGE
************
    Write a dessert menu;
    If the dessert is pie, console.log 'Pie, pie, me oh my!'
    If the dessert is cake, console.log 'Cake is great!'
    If the dessert is ice cream, console.log 'I scream for ice cream!'
    Otherwise, have your switch statement console.log 'Not on the menu.'
*/
let desert = "cake";

switch (desert){
    case "pie":
        console.log("Pie, pie, me oh my!");
        break;
    case "cake" :
        console.log("Cake is great!");
        break;
    case "ice cream":
        console.log("I scream for ice cream!");
        break;
    default:
        console.log("Not on the menu.");
}