const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};
// declare the function that will be used to report back how many instances of each string
// are in the allItems array

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
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
