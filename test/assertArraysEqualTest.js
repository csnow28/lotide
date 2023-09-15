const assertArraysEqual = require("../assertArraysEqual")

// added some quick test cases
assertEqual([5, 6, 7, 8], [5, 6, 7, 8]); // => true
assertEqual([0, 9, 8], [8, 9, 0]); // => false
assertEqual(["taco", "cat"], ["burrito", "cat"]); // => false