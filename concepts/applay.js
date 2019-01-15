/*
  Change the context of the this in the function.
  With the apply() method, you can write a method that can be used on different objects.

  The bind() method creates a new function that, when called.
  The first parameter in apply() method sets the "this" value
  which is the object upon which the function is invoked.
  The second parameter of the apply() method accepts the
  arguments to the actual function as an array.
*/

const kath = {
  name: 'Catalina',
  lastName: 'Meneses',
  age: 28,
};

const lesly = {
  name: 'Lesly',
  lastName: 'Carmona',
  age: 90,
}

const locations = ['Colombia', 'Medellín'];

const greeting = function(country = 'Colombia', city = 'Medellín'){
  return `${this.name}, welcome to ${city} ${country}`;
};

greeting()
// console: => "undefined, welcome to undefined undefined"

greeting.apply(kath, location);
// console: => "Catalina, welcome to Medellín Colombia"

greeting.apply(lesly);
// console: => "Lesly, welcome to Medellín Colombia"