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

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const multiColorShirtObject = { colors: ["red", "blue",], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject , anotherMultiColorShirtObject), true);

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject , longSleeveMultiColorShirtObject), false);