const eqArrays = require("./eqArrays");

// function that will compare two objects and will return true if they are equal
// and will return false if not.

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
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      return eqArrays(object1[key], object2[key])
    } else if (object1[key] === object2[key]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects