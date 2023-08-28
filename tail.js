// initial function to determine if the assertion will pass or fail //
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};
// function to return all but first element in the array //
const tail = function(array) {
  return array.slice(1);
  return array;
}

// test to ensure original array is not modified with code //
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);