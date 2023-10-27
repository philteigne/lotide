const eqObjects = require('./eqObjects');

const eqArrays = require('./eqArrays');

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

// const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
// const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
// const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };

// assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject);
// assertObjectsEqual(longSleeveMultiColorShirtObject, anotherMultiColorShirtObject);

