// Returns the first key in the provided object that contains the input value.
const findKeyByValue = function(searchObject, findValue) {

  const keyArray = Object.keys(searchObject);

  for (let i of keyArray) {
    if (searchObject[i] === findValue) {  //  if the object key's value is equal to input, return the key
      return i;
    }
  }

};

module.exports = findKeyByValue;