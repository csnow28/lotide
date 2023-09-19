const assertArraysEqual = require("../assertArraysEqual")
const letterPositions = require("../letterPositions")

// test code

console.log(letterPositions("Halloween"));
console.log(letterPositions("poetry for neanderthals"));
assertArraysEqual(letterPositions("Momo is a cool cat"));