/** 
 * Prototypes are the mechanism by which JavaScript objects inherit features from one another.
 * 
 * More:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes
*/

/* --- Create a prototype Person with attributes --- */
function Person (name, lastName) {
  this.name = name;
  this.lastName = lastName;
}

// Create a new person
const catalina = new Person('Catalina', 'Meneses')
// Console: catalina > Person {name: "Catalina", lastName: "Meneses"}

// Create another person
const lesly = new Person('Lesly', 'Carmona')
// Console: lesly > Person {name: "Lesly", lastName: "Carmona"}

/*
  If i edit the object catalina, lesly is not going to modify because
  they have different references in memory
*/
lesly.name = 'Another'
/*
  Console: lesly > Person {name: "Another", lastName: "Carmona"}
  Console: catalina > Person {name: "Catalina", lastName: "Meneses"}
*/

/* --- Adding a new method for Person to say hello --- */
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name} ${this.lastName}`)
}

/* --- By adding a method to the prototype, it can be used by the objects that were created with this prototype --- */
catalina.greet()
// Console: Hello, my name is Catalina Meneses

lesly.greet()
// Console: Hello, my name is Lesly Carmona