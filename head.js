// the head function will take in an array, and will only return the first element in the array

// assertEqual function to determine if the assertion will pass or fail
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};
// adding a function to return the first element in the array:
const head = function(array) {
  return array[0];
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["cat", "dog"]),"cat");
// additional tests to try for failures //
assertEqual(head([""]), undefined);
assertEqual(head([]), "taco");
assertEqual(head(["taco"]), undefined);