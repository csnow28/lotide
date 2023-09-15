// adding in a new function that will compare two arrays, and using the eqArrays functions, will return
// either a pass or fail as a check.
const eqArrays = require("./eqArrays")

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`🟢 Assertion Passed: ${array1} === ${array2}`);
  } else if (array1 !== array2) {
    console.log(`🔴 Assertion Failed: ${array1} !== ${array2}`);
  }
};

module.exports = assertArraysEqual
