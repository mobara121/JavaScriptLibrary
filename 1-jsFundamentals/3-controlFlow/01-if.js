/*
falsy values:
1. false
2. 0
3. "", '', ``
4. null
4.undefined
6. Nan

*/

let isOn = true;

if(isOn == true) {
    console.log("The light is on!"); //light is on!
}

let isOn = true;

if(isOn) {
    console.log("The light is on!"); //light is on!
}

let isOn = false;

if(isOn == false) {
    console.log("The light is off!"); //light is off!
}

let weather = 30;

if(weather < 90){
    console.log("Weare a jacket!");
}