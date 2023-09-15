// create a function, assertEqual, that takes in two values (actual, expected) that returns true if the values are equal, otherwise false
// use of emojis help visualize the assertions quickly

const assertEqual = function(actual, expected) {
  // checks if actual equals/the same as expected
  if (actual === expected) {
    // logs a pass if they are equal/the same
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
    // logs a fail if they are not equal/the same
  } else if (actual !== expected) {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;