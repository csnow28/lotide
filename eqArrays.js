// eqArrays is a function that will take in two arrays and checks if they are equal
// if the arrays are equal, will return true, else will return false if not equal
// same emoji use for quick visual assertion

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  // check if the length of the 2 arrays are not equal, and if so, return false.
  if (array1.length !== array2.length) {
    return false;
  }
  // if array lengths are equal, loop through the array and determine if the elements are NOT the same and return false
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  // return true if the array elements match!
  return true;
};
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);