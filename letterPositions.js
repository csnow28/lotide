const letterPositions = function(sentence) {
  //create the results object that will log the individual letters and the array of the index position
  const results = {};
  //will loop through the sentence to get each letter and its index
  for (let i = 0; i < sentence.length; i++) {
    //declare letter to be able to pick the individual letters
    const letter = sentence[i];
    //exclude spaces, and add the letter position to the array
    if (letter !== ' ') {
      if (!results[letter]) {
        results[letter] = [];
      }
      //push the results into the object, and add the array of the index/letter position
      results[letter].push(i);
    }
  }
  return results;
};

console.log(letterPositions("Halloween"));

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
