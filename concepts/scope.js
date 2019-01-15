/*
  Scope determines the accessibility (visibility) of variables.
  there are two types of scope: local and global
*/

/*
  --- Local scopre ---

  The variable date is defined in the function,
  so you can use it just in the function
*/

function currentDay() {
  var date = new Date();
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  return `Hi, today is ${days[date.getDay()]}`;
}
// console: => "Hi, today is Monday"

/*
  --- Global scopre ---
  
  The variable months are defined outside of the currentMonth function
  And you can call it outside of the function or inside of the function
*/
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function currentMonth() {
  var date = new Date();
  var monthNumer = date.getMonth();
  return `Hi we are in ${months[monthNumer]}`;
}
// console: => "Hi we are in January"