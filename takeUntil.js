//function to return a "slice of the array with elements taken from the beginning and
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

module.exports = takeUntil