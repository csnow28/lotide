// this function (tail) takes in an array, and returns all elements in the array
// except the first element of the array

const tail = function(array) {
  return array.slice(1);
};

module.exports = tail;