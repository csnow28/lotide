const assertObjectsEqual = require("../assertObjectsEqual")

// test code

assertObjectsEqual({a: "1", b: ["2", 3]}, {b: ["2", 3], a: "1"});
assertObjectsEqual({c: "1", d: "2"}, {c: "1", d: "2", e: "3"});