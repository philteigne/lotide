const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

const flatten = function(arrToFlatten) {

  let flatArr = [];

  for (let i of arrToFlatten) {

    let arrayCheck = Array.isArray(i);

    if (!arrayCheck) {
      flatArr.push(i);
    }

    if (arrayCheck) {
      for (let j of i) {
        flatArr.push(j);
      }
    }

  }

  return flatArr;

};

module.exports = flatten;

// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);