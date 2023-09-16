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

module.exports = flatten