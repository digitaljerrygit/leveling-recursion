# leveling-recursion

This repository contains recursive JavaScript functions. The purpose of this project is to provide simple examples to help others understand and master the concept of recursion.

## What is Recursion?

Recursion is a programming technique where a function calls itself to solve a problem. Recursion follows the "divide and conquer" approach, where a problem is divided into smaller subproblems that are easier to solve.

It's the gateway to understanding and constructing more complex algorithms. Understanding recursion and its applications can significantly enhance your problem-solving skills as a programmer.

## Example

Function sum takes an array of numbers and returns the total.

```js
function sum(nums) {
  if (nums.length === 0) {
    return 0;
  }
  // Notice we're calling itself here...
  return sum(nums.slice(1)) + nums[0];
}

const nums = [1, 2, 2];
sum(nums); // @returns 5
```
