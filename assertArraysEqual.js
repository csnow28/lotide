// adding in a new function that will compare two arrays, and using the eqArrays functions, will return
// either a pass or fail as a check.
// using the eqArrays function to verify if arrays are equal in addition to comparing

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};
// removed unneccessary empty arrays, they weren't needed to properly execute the function
const assertEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// added some quick test cases
assertEqual([5, 6, 7, 8], [5, 6, 7, 8]);
assertEqual([0, 9, 8], [8, 9, 0]);
assertEqual(["taco", "cat"], ["burrito", "cat"]);