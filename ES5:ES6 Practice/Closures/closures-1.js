// 1) What will the following code output?

// Our goal is for each inner function to maintain its reference to the variable i without the value of it 
// being altered. We'll solve this using an IIFE, or an immediately-invoked function expression.
// We pass the variable i into the outer function as a local variable named j, where we then return a 
// function that will alert the j for us. This will correctly alert the numbers 0, 1, and 2 in 
// the correct order.

// for (var i = 0; i < 3; i++) {
//   setTimeout(function(j) { 
//     return function() {
//       return alert(j); 
//     } ()
//   }(i), 1000 + i) ;
// }

// 2) Write a function that would allow you to do this.
function createBase(num) {

  // Closures allow us to reference parameters and variables declared outside of the inner function.
  function addSix(value) {
    return value + num;
  }

  return addSix;
}

// 3) How would you use a closure to create a private counter?

function counter() {
  var counter = 0;
  // return an object with several functions that allow you
  // to modify the private counter variable
  return {
    add: function(add_value) {
      counter += add_value;
    },
    show: function() {
      return `The current value is: ${counter}`;
    }
  }
}

// Using the counter function.
var prv_counter = counter();
prv_counter.add(10)
prv_counter.add(23)

// Accessing the private variable.
console.log(prv_counter.show())

// Escopes

let a = 1;
function A() {
  console.log(a)
  a = 2;
}

a = 3;
function B() {
  console.log(a)
}

A();
B();

// 4) Standard set of functions for converting units of measures:

function makeConverter(toUnit, factor, offset) {
  offset = offset || 0;
  return function(input) {
      return [((offset+input)*factor).toFixed(2), toUnit].join(" ");  
  }
}   

var milesToKm = makeConverter('km',1.60936);
var poundsToKg = makeConverter('kg',0.45460);
var farenheitToCelsius = makeConverter('degrees C',0.5556, -32);

milesToKm(10); //"16.09 km"
poundsToKg(2.5); //"1.14 kg"
farenheitToCelsius(98); //"36.67 degrees C"