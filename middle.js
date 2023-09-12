/* const eqArrays = function (array1, array2) {
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
const assertEqual = function(actual, expected) {
//const actual = [];
//const expected = [];
if (eqArrays(actual, expected)) {
  console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
} else if (actual !== expected) {
  console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
}
}; */


const middle = function(array) {
  const length = array.length;
  const midIndex = Math.floor(length / 2);

  if (length <= 2) {
    return [];
  } else if (length % 2 === 0) {
    const middle1 = array[midIndex - 1];
    const middle2 = array[midIndex];
    return [middle1, middle2];
  } else {
    return [array[midIndex]];
  }
};

console.log(middle([1]));
console.log(middle([1, 2]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6]));