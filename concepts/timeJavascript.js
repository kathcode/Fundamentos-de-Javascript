/*
  In principle, any task that has been delegated to the browser through a callback,
  must wait until all the instructions of the main program have been executed.
  For this reason, the waiting time defined in functions such as setTimeout,
  does not guarantee that the callback is executed in that time exactly,
  but at any time thereafter, only when the task queue has been emptied.
*/

console.log('a')
console.log('b')
console.log('c')

// Console: a
// Console: b
// Console: c

console.log('a')
setTimeout(function() {
  console.log('b')
}, 2000)
console.log('c')

// Console: a
// Console: c
// Console: b