const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {

  let equalArrays = eqArrays(arr1, arr2);

  if (equalArrays) {
    console.log(`😎😎 Assertion Passed: ${arr1} === ${arr2} 😎😎`);
  }

  if (!equalArrays) {
    console.log(`💔💔 Assertion Failed: ${arr1} !== ${arr2} 💔💔`);
  }

};

module.exports = assertArraysEqual;