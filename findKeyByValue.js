const assertEqual = require('./assertEqual');

//  look through searchObject and return the first key that contains findValue
const findKeyByValue = function(searchObject, findValue) {

  const keyArray = Object.keys(searchObject);

  for (let i of keyArray) {
    if (searchObject[i] === findValue) {
      return i;
    }
  }

};

module.exports; findKeyByValue;

// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama: "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);


