const eqObjects = function(object1, object2) {
  //check the keys of the objects using the Object.keys
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  // check to see if the number of keys is the same
  if (keys1.length !== keys2.length) {
    return false;
  }
  //check to see if the values of each key are the same
  for (const key of keys1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

// cleaning up and adding in the visual assertions to eqObjects

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`🟢 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🔴 Assertion Failed: ${inspect(actual)} === ${inspect(expected)}`);
  }
};
