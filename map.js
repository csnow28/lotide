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

module.exports = map