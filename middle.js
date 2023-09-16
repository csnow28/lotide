// function middle takes in the value of array, and will return the middle
// element of the array. If uneven, will take middle two, and will not
// return if the array contains only one or two elements

const middle = function(array) {
  const length = array.length;
  const midIndex = Math.floor(length / 2);
  // add in the check if the array length is less or equal to 2, in which case
  // return an empty array
  if (length <= 2) {
    return [];
    // if length of the array is even, return the two middle values
  } else if (length % 2 === 0) {
    const middle1 = array[midIndex - 1];
    const middle2 = array[midIndex];
    return [middle1, middle2];
  } else {
    // if the array length is odd, perfect! return the middle element.
    return [array[midIndex]];
  }
};

module.exports = middle