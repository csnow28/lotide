const assertArraysEqual = require("../assertArraysEqual")
const map = require("../map")

// test code

let words = ["Halloween", "Cats", "Bats", "Witches", "Pumpkins"];
//let words = ["purple", "blue", 5];
//let words = ["tree", "acorn", "mushroom", ["grass"]];
//let words = "dragon ball z";
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ['H', 'C', 'B', 'W', 'P']);