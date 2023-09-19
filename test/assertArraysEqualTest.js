const assertArraysEqual = require("../assertArraysEqual")
// added some quick test cases
eqArrays(assertArraysEqual([5, 6, 7, 8], [5, 6, 7, 8])); // => true
eqArrays(assertArraysEqual([0, 9, 8], [8, 9, 0])); // => false
eqArrays(assertArraysEqual(["taco", "cat"], ["burrito", "cat"])); // => false