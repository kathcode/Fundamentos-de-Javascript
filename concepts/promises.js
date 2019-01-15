/*
  A Promise is an object representing the eventual completion or failure
  of an asynchronous operation. Since most people are consumers of
  already-created promises.

  Status:

            fulfilled - .then(val => {})
          /
  pending
          \
            rejected - .catch(err => {})

  More:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
*/

/* --- Creating a new promise --- */
new Promise(function (resolve, rejected) {

}).then(val => {
  // Here goes the code when the promise is resolved.
}).catch(err => {
  // Here goes the code when the promise is faild.
})

/* --- Creating a new promise that return a request response --- */
function getCountries() {
  const url = 'https://restcountries.eu/rest/v2/';

  return new Promise((resolve, rejected) => {
    fetch(url)
    .then(response => response.json())
    .then(data => resolve(data)) // Prints result from `response.json()`
    .catch(err => rejected(err)); // Print the error
  })
}

// Resolving the promise
getCountries()
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.log(err)
  })
// console: => [countries...]