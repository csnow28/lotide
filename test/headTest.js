const head = require('../head');

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["cat", "dog"]),"cat");
// additional tests to try for failures //
assertEqual(head([""]), undefined);
assertEqual(head([]), "taco");
assertEqual(head(["taco"]), undefined);