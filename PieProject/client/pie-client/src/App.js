import React, {useState} from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';

function App() {

  const [sessionToken, setSessionToken] = useState(5);//1st variable:sessionToken=(undefined), 2nd varialbe:setSessionToken=variable to be updated// 'set'をみたら、変更しようとしてるんだなあ、と予測する

  let string = 'this is a string'
  let number = 4
  let obj = {
    test: 'test'
  }

  return (
    <div className="App">
      <Navbar token={sessionToken} string={string} num={number} object={obj} />
      <Auth />

    </div>
  );
}

export default App;


//ARRAY DESTRUCTURING

//destructuring in Javascript os a simplified method of extracting multiple properties from an array by taking the structure of the array, and then deconstructuring it down into indivudual parts by assigning them variables.

// let [first, second, third] = ['Feloowship of the Ring', 'Two Towers', 'Return of the King'];
// console.log(first, second, third);

// let[a, , c] = ['Mercury', 'Venus', 'Mars'];
// console.log(a); //Mercury,
// console.log(c); //Mars  console.log(b)-> Venus

// let planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'];
// let[first, , third, ...others] = planets;
// // Arrayの中で　“...” = spread operator
// console.log(first)
// console.log(third)
// console.log(others);
