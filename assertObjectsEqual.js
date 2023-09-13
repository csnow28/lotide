const eqObjects = function(object1, object2) {
  //check the keys of the objects using the Object.keys
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  // check to see if the number of keys is the same
  if (keys1.length !== keys2.length) {
    return false;
    
    if (eqArrays(actual, expected)) {
      console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
    } else if (actual !== expected) {
      console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
    }
  }

  const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`🟢 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🔴 Assertion Failed: ${inspect(actual)} === ${inspect(expected)}`);
  }
};
