/**
 * This function will return the sum of all numbers passed how parameter
 * 
 * Using REDUCE
 * 
 * @param {Number} params This params will be the numbers to sum
 */
const sum = (...params) => params.reduce((acum, number) => acum + number, 0)
sum(2, 6, 4) // => 12

/**
 * This function will return an array of the result
 * 
 * Using MAP
 * 
 * @param {Number} params This params will be the numbers to multiplicate
 */
const double = (...params) => params.map(numero => numero * 2);
double(2,6, 8) // => [ 4, 12, 16 ]