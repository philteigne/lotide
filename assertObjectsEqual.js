// Returns a true assertion if the two given objects are identical, and a false assertion if they are not.
const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {

  const inspect = require('util').inspect;

  let equalObjects = eqObjects(actual, expected);

  if (equalObjects) {
    console.log(`😎😎 Assertion Passed: ${inspect(actual)} === ${inspect(expected)} 😎😎`);
  }

  if (!equalObjects) {
    console.log(`💔💔 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)} 💔💔`);
  }

};

module.exports = assertObjectsEqual;