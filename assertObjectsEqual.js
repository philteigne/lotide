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