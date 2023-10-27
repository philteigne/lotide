const assertEqual = require('./assertEqual');

const findKey = function(object, callback) {

  const keys = Object.keys(object);

  for (let i of keys) {
    if (callback(object[i])) {
      return i;
    }
  }

};

module.exports = findKey;

// let result1 = findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2);

// let result2 = findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 3);

// assertEqual(result1, "noma");
// assertEqual(result2, "Akaleri");
