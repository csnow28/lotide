// create a function, assertEqual, that takes in two values (actual, expected).
// add assertions via console.log, that returns true if the values are equal, otherwise false
// used emojis to help make the assertion checks more visible

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1,1);
assertEqual(3,5);
assertEqual("Camillia", "Snow");
assertEqual(1,"cat");
assertEqual("taco", "taco");