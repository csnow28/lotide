// a function that will take in a collection of items and will return counts for a specific subset
// example being, count how many times a name appears

const countOnly = function(allItems, itemsToCount) {
  // create an empty object
  const results = {};
  // loop through the elements
  for (const item of allItems) {
    console.log(item);
    // if the item (in this case, name) is present in the itemsToCount value, add it to new object
    if (itemsToCount[item]) {
      if (results[item]) {
      // increment based on how many times that name appears in the loop of the object
        results[item] += 1;
      } else {
      // or, add one if the name appears once
        results[item] = 1;
      }
    }
  }
  return results;
};

module.exports = countOnly