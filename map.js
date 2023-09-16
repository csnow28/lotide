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
if (eqArrays(array1, array2)) {
  console.log(`🟢 Assertion Passed: ${array1} === ${array2}`);
} else if (array1 !== array2) {
  console.log(`🔴 Assertion Failed: ${array1} !== ${array2}`);
}

let words = ["Halloween", "Cats", "Bats", "Witches", "Pumpkins"];
//let words = ["purple", "blue", 5];
//let words = ["tree", "acorn", "mushroom", ["grass"]];
//let words = "dragon ball z";

// add a function that takes an array, and then uses a callback to return a
// new array based on the results of said callback to each item in the array
// in this example, the index of 0, so the first letter of each element

const map = function(array, callback) {
  // create an empty array for the callback
  const results = [];
  // loop over the items in the array
  for (let item of array) {
    // push the item in the array into the empty, new array
    results.push(callback(item));
  }
  return results;
};
const results1 = map(words, word => word[0]);
console.log(results1);

