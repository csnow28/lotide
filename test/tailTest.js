const tail = require("../tail")

// tests to ensure original array is not modified with code via tail function
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);