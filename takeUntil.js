const eqArrays = function (array1, array2) {
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
};

//function to return a "slice of the array with elements taken from the beginning.
//keep going until the callback reeturns a truthy value."
const takeUntil = function(array, callback) {
  //create the array we will push the items to, from the callback
  const results = [];
  // loop over the array
  for (const item of array) {
    //check the values in the array and push them into the new array
    if (!callback(item)) {
      results.push(item);
    } else {
      //use break to stop the loop once truthy value is found which also stops pushing elements into the new array
      break;
    }
  }
  return results;
};
  const data = ["Halloween", "is", "super", "cool", "and", "scary"];
  const results = takeUntil(data, data => data === 'and');
console.log(results);
//results should return "Halloween" "is" "super" "cool"

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');