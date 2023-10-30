// Returns a true assertion if the two given arrays are identical, and a false assertion if they are not.
const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {

  let equalArrays = eqArrays(arr1, arr2); //  compare array values

  if (equalArrays) {
    console.log(`😎😎 Assertion Passed: ${arr1} === ${arr2} 😎😎`);
  }

  if (!equalArrays) {
    console.log(`💔💔 Assertion Failed: ${arr1} !== ${arr2} 💔💔`);
  }

};

module.exports = assertArraysEqual;