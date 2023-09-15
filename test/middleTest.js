const middle = require("../middle")
const assertArraysEqual = require("../assertArraysEqual")

// adding test cases for middle function

assertArraysEqual(middle([1]));
assertArraysEqual(middle([1, 2]));
assertArraysEqual(middle([1, 2, 3]));
assertArraysEqual(middle([1, 2, 3, 4, 5]));
assertArraysEqual(middle([1, 2, 3, 4]));
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]));