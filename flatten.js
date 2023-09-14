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
// added const for empty arrays in order to properly compare and utilize eqArrays messaging //
const actual = [];
const expected = [];
if (eqArrays(actual, expected)) {
  console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
} else if (actual !== expected) {
  console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
}

// creating a function with the value of arrayBag (tempted to rename it to halloweenBag...), which takes the array
// containing elements, and even nested elements, and then returns a 'flattened' version, so one singular array.

const flatten = function(arrayBag) {
  // add empty array for result
  const result = [];
  // loop through the array
  for (let i = 0; i < arrayBag.length; i++) {
    // check to see if there are any nested arrays
    if (Array.isArray(arrayBag[i])) {
      // loop through nested array elements
      for (let j = 0; j < arrayBag[i].length; j++) {
        // push the nested array elements into new array (in test code: 3, 4, 6)
        result.push(arrayBag[i][j]);
      }
    } else {
      // push into the array if it isn't an array already (test code: 1, 2, 5)
      result.push(arrayBag[i]);
    }
  }
  return result;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));
console.log(flatten([["chips"], ["skittles", "sour patch kids", "swedish berries", "kit kat"], ["suckers"]]));