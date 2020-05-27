class User{
    constructor(first, last, e) {
        this.f = first;
        this.l = last;
        this.email = e;
    }
}

var userOne =new User("Paul", "O'Connor", "poconnor@elevenfifty.org");
console.log(userOne.first);//undefined
console.log(userOne.f);//Paul
console.log(userOne.l);//O'Connor
console.log(userOne); //User{f:"Paul", l:"O'Connor", email:"poconnor@elevenfifty.org"}

class Player {
    constructor(name, number, averagePoints){
        this.name =name;
        this.num = number;
        this.ave = averagePoints;

    }
}

var playerOne = new Player("Romeo", 1, .55);
    console.log(playerOne.name);
    console.log(playerOne.num);
    console.log(playerOne.ave);
    console.log(playerOne);
