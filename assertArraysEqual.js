// adding in a new function that will compare two arrays, and using the eqArrays functions, will return
// either a pass or fail as a check.


const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else if (array1 !== array2) {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertArraysEqual
