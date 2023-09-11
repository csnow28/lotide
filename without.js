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

const assertEqual = function(actual, expected) {
//const actual = [];
//const expected = [];
if (eqArrays(actual, expected)) {
  console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
} else if (actual !== expected) {
  console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
}
}; 


const without = function(source, itemsToRemove) {
  //add an empty results array to return a new array without the unwanted items
  const results = [];
  // time to loop over the items in the source string
  for (let i = 0; i < source.length; i++) {
  //add a value that is false to continue the loop
  let toRemove = false;
  //add a second loop over itemsToRemove array to check if an item here matches an item in the source array
    for (let w = 0; w < itemsToRemove.length; w++) {
      if (source[i] === itemsToRemove[w])
      //if an item does match, the toRemove then becomes true
      toRemove = true;
    }
  //once the loops are finished, time to take the items to remove (if true!) and push 
  if (!toRemove) {
    results.push(source[i]);
  }
  }
  return results;
};

console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));

//const words = ["hello", "world", "lighthouse"];
//without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
//assertArraysEqual(words, ["hello", "world", "lighthouse"]); 