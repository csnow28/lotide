const assertArraysEqual = require("../assertArraysEqual")
const without = require("../without")

// test code

const words = ["hello", "world", "lighthouse"];
let withoutWord = without(words, []);
assertArraysEqual(withoutWord, ["hello", "world", "lighthouse"]);
assertArraysEqual(withoutWord, []);

withoutWord = without(words, ["hello"]);
assertArraysEqual(withoutWord, ["hello", "world", "lighthouse"]);


assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]));
assertArraysEqual(without(["taco", "cat", "is", "boo", "cool"], ["boo"]));