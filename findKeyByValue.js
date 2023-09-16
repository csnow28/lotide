// function that has an object and value, and will return the key that
// matches the value

const findKeyByValue = function(object, value) {
//to use object.keys(), get the object keys in an object
  const keys = Object.keys(object);
  //loop through the keys
  for (let key of keys) {
    //check if the key matches the value
    if (object[key] === value) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;