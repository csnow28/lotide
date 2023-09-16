// function that will take an elements in an array and will return only the elements from the source array
// that are not in the itemsToRemove array.
// The function values are source, and itemsToRemove

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

module.exports = without