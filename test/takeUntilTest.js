const { assert } = require("chai");
const assertArraysEqual = require("../assertArraysEqual")
const takeUntil = require("../takeUntil")

// test code

const data = ["Halloween", "is", "super", "cool", "and", "scary"];
const results = takeUntil(data, data => data === 'and');
assertArraysEqual(results);
//results should return "Halloween" "is" "super" "cool"

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"])
assertArraysEqual(results2, ["I've", "been", "to", "Redwood"])

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2])
assertArraysEqual(results1, [1, 2, 5, 7, -1])

//console.log('---');