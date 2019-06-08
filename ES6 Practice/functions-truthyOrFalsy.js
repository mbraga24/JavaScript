/*
  DESCRIPTION / OBJECTIVE

  It can be hard to keep track of what's truthy or falsy in JavaScript.
  Write a function, truthyOrFalsy(), that takes in any value and returns
  true if that value is truthy and false if that value is falsy.
*/

// Checks the value of boolean variables.
const truthyOrFalsy = (isIt) => {
  if (isIt) {
    return true
  }
  else {
    return false
  }
}

let falsy = false;
let truthy = true;

console.log(truthyOrFalsy(falsy));  // false
console.log(truthyOrFalsy(truthy)); // true
console.log(truthyOrFalsy(0));      // false
console.log(truthyOrFalsy(1));      // true
