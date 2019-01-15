/*

*/

const kath = {
  name: 'Catalina',
};

const greeting = function(country, city){
  return `${this.name}, welcome to ${city} ${country}`;
};

//creates a bound function that has same body and parameters 
const greet = greeting.bind(kath);

console.log(greet);
// console: => function ()

console.log(greet('Colombia', 'Medellín'));
// console: => "Catalina, welcome to Medellín Colombia"