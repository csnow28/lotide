const assertEqual = require("../assertEqual")
const eqObjects = require("../eqObjects")

// test code

const multiColorShirtObject = { colors: ["red", "blue",], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject , anotherMultiColorShirtObject), true);

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject , longSleeveMultiColorShirtObject), false);

const purplePink = {purple: "1", pink: "2"};
const pinkPurple = {pink: "2", purple: "1"};
assertEqual(eqObjects(purplePink, pinkPurple), true);