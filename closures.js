/**
 * Closures
 * 
 * Closures are functions that handle independent variables. In other words,
 * the function defined in the closure "remembers" the scope in which it was created.
 */

// 1. Example

// The closure
function greetFamilly(lastName) {
  // Return a function
  return function greetMember(firstName) {
    console.log(`Hello ${firstName} ${lastName}`);
  }
}

// This variable retrn a function
const greetMeneses = greetFamilly('Meneses')
// Pass the parameter to the function
greetMeneses('Catalina'); // ==> Hello Catalina Meneses

//2. Example
function sum(n1) {
  return function(n2) {
    return n1 + n2;
  }
}

const sumar5 = sum(5);
const sumar10 = sum(10);

console.log(sumar5(2)); // ==> 7
console.log(sumar10(5)); // ==> 15
