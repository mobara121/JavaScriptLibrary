//ES6 JS Classes
class User {
    constructor(name){
        this.name = name;
        this.type = "Trial User"
    }
    //Method 1
    greet(){
        console.log('Welcome back,' + this.name);
    }
    //Method 2
    status(){
        console.log('Current status:' + this.type);
    }
}

class TrialUser extends User {
    trialEnding(){
        console.log('Your trail will be ending soon, ' + this.name + '. Would you like to join our program?');
    }
}

//Instance of User class(object)
var anonDude = new User("Anonymous dude");
anonDude.greet();
anonDude.status();

//Instance of TrialUser classs
var trialUser = new TrialUser("Paul");
trialUser.greet();
trialUser.trialEnding();
trialUser.status();