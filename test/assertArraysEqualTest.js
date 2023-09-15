const assertArraysEqual = require("../assertArraysEqual")

// added some quick test cases
assertEqual(assertArraysEqual([5, 6, 7, 8], [5, 6, 7, 8])); // => true
assertEqual(assertArraysEqual([0, 9, 8], [8, 9, 0])); // => false
assertEqual(assertArraysEqual(["taco", "cat"], ["burrito", "cat"])); // => false