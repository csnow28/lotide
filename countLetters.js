// function that will take in a sentence, and then returns a count of each
// letter in the sentence - while also removing, so not counting spaces
// declare the function that takes in a string
const countLetters = function(addedStr) {
  // add in the empty object that will return the letters and count
  const individualLetterCount = {};
  // time to loop through the string
  for (let letters of addedStr) {
    //to remove the spaces, we can add that as another condition
    if (letters !== ' ') {
    //adding to object the individual letters, and if a letter is present, adding + 1 to it each time it's found
      individualLetterCount[letters] = (individualLetterCount[letters] || 0) + 1;
    }
  }
  //create the object with individual letters and the amount of times they appear
  return individualLetterCount;
};

module.exports = countLetters