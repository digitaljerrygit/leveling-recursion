/***
 * Given, a number, return the factorial.
 * @function factorial The given code defines a recursive function called factorial that calculates the factorial of a given number.
 * @param {number} num A number to calculate the factorial.
 * @returns {number} A factorial is an operation that calculates the product of all positive integers from 1 to a given number.
 * @example
 * factorial(5); // Returns 120
 */

export default function factorial(num) {
  if (num === 0) {
    return 1;
  }
  return factorial(num - 1) * num;
}
