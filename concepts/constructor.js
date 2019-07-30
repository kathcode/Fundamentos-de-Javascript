/**
 *
 * The constructor method is a method used to creating and
 * initializing an object created.
 *
 */

function Apple(height, width, color) {
  this.height = height;
  this.width = width;
  this.color = color;
}

/**
 * When you create a new apple, it will create an instance of
 * the Apple object function (The instance are unique).
 */

const apple1 = new Apple(10, 10, "red");
console.log(apple1); // ==> Apple {height: 10, width: 10, color: "red"}

const apple2 = new Apple(20, 20, "green");
console.log(apple2); // ==> Apple {height: 20, width: 20, color: "green"}

/**
 * Constructor with prototype
 */

Apple.prototype.eat = () => "Eat the apple";
Apple.prototype.throw = () => "Throw the apple";

apple1.eat();
// Console: "Eat the apple"

apple2.throw();
// Console: "Throw the apple"

/**
 * Use THIS in the prototype
 */

Apple.prototype.wash = () => `Wash the apple ${this.color}`;
