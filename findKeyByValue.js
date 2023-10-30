//  look through searchObject and return the first key that contains findValue
const findKeyByValue = function(searchObject, findValue) {

  const keyArray = Object.keys(searchObject);

  for (let i of keyArray) {
    if (searchObject[i] === findValue) {
      return i;
    }
  }

};

module.exports = findKeyByValue;