// eqArrays is a function that will take in two arrays and checks if they are equal
// if the arrays are equal, will return true, else will return false if not equal

const eqArrays = function(array1, array2) {
  // check if the length of the 2 arrays are not equal, and if so, return false.
  if (array1.length !== array2.length) {
    return false;
  }
  // if array lengths are equal, loop through the array and determine if the elements are NOT the same and return false
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  // return true if the array elements match!
  return true;
};
module.exports = eqArrays