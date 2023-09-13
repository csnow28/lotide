const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//scan object, return first key for which the callback returns a truthy value
//no key found? return undefined.
//can also convert below function into an arrow function
//const findKey = object, callback => { the rest of the code would be the same }
function findKey(object, callback) {
  //get an array of the objects' keys
  const keys = Object.keys(object);
  //loop through the keys
  for (let key of keys) {
    //if the callback returns the truthy value for the key value, return the key
    if (callback(object[key])) {
      return key;
    }
  }
  //if there is no truthy value, then we can return undefined
  return undefined;
};

findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);

assertEqual(result, "noma");