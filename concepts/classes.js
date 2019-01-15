/** 
 * JavaScript classes, introduced in ECMAScript 2015, are primarily syntactical
 * sugar over JavaScript's existing prototype-based inheritance. The class
 * syntax does not introduce a new object-oriented inheritance model to JavaScript.
 * 
 * More:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
*/

/* --- Create a new class Person --- */
class Person {
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} ${this.lastName}`)
  }
}


/* --- Create a person that extends (inherits) of the class person --- */
class Developer extends Person {
  constructor(name, lastName) {
    // First we need to call the parameters of the Person class
    super(name, lastName);
  }

  greet() {
    console.log(`Hello, my name is ${this.name} ${this.lastName} and I'm developer :)`)
  }
}

// Create a new person
const catalina = new Person('Catalina', 'Meneses')
// Console: catalina > Person {name: "Catalina", lastName: "Meneses"}

// Create another person
const lesly = new Developer('Lesly', 'Carmona')
// Console: lesly > Person {name: "Lesly", lastName: "Carmona"}

/* --- Excecute the method greet for each person --- */

catalina.greet()
// Console: Hello, my name is Catalina Meneses

lesly.greet()
// Console: Hello, my name is Lesly Carmona and I'm developer :)