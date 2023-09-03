const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(object, value) {
//to use object.keys(), get the object keys in an array
  const keys = Object.keys(object);
  //loop through the keys
  for (let key of keys) {
    //check if the key matches the value
    if (object[key] === value) {
      return key;
    }
  }
};

/* checked spoilers, I did a for... in first
  //loop through the object to find the key
  for (let key in object) {
    //if the key in the object matches the value, return the key
    if (object[key] === value) {
      return key;
    }
  }
  */

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");