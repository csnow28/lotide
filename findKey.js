//scan object, return first key for which the callback returns a truthy value
//no key found? return undefined.
//can also convert below function into an arrow function
//const findKey = object, callback => { the rest of the code would be the same }

const findKey = function(object, callback) {
  //get an array of the objects' keys
  const keys = Object.keys(object);
  //loop through the keys
  for (let key of keys) {
    //if the callback returns the truthy value for the key value, return the key
    if (callback(object[key])) {
      return key;
    }
  }
  //if there is no truthy value, then we can return undefined
  return undefined;
};

module.exports = findKey