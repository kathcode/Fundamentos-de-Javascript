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
    console.log(`Hello, my name is ${this.name} ${this.lastName}`);
  }
}

/* --- Create a person that extends (inherits) of the class person --- */
class Developer extends Person {
  constructor(name, lastName) {
    // First we need to call the parameters of the Person class
    super(name, lastName);
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} ${this.lastName} and I'm developer :)`
    );
  }
}

// Create a new person
const catalina = new Person('Catalina', 'Meneses');
// Console: catalina > Person {name: "Catalina", lastName: "Meneses"}

// Create another person
const lesly = new Developer('Lesly', 'Carmona');
// Console: lesly > Person {name: "Lesly", lastName: "Carmona"}

/* --- Excecute the method greet for each person --- */

catalina.greet();
// Console: Hello, my name is Catalina Meneses

lesly.greet();
// Console: Hello, my name is Lesly Carmona and I'm developer :)

/* --- Extend a class --- */

class Animal {
  constructor(name) {
    this.name = name;
  }

  eat(food) {
    console.log(`Hi, my name is ${this.name} and I like to eat ${food}`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // This is the name instanced of Animal class
    this.breed = breed;
  }

  bark() {
    console.log(
      `Bark bark, I'm ${this.name}, my breed is ${this.breed} and I'm a dog`
    );
  }
}

const rhino = new Animal('Rhiney');
// Console: > Animal {name: 'Rhiney'}

const dog1 = new Dog('Peluche', 'French poodle');
// Console.log: > Dog {name: "Peluche", breed: "French poodle"}
dog1.eat('cuido');
// Console.log: > Hi, my name is Peluche and I like to eat cuido.

const dog2 = new Dog('Prince', 'French poodle');
dog2.bark();
// Console.log: > Bark bark, I'm Prince, my breed is French poodle and I'm a dog
