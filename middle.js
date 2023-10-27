const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

const middle = function(arrayToMiddle) {

  let arrayLength = arrayToMiddle.length;

  let middleArr = [];
  let middleIndexStart;

  if (arrayLength < 3) {
    return middleArr;
  }

  if (arrayLength % 2 === 0) {  //  array has even length
    middleIndexStart = arrayLength / 2 - 1;
    middleArr.push(arrayToMiddle[middleIndexStart]);
    middleArr.push(arrayToMiddle[middleIndexStart + 1]);
  }

  if (arrayLength % 2 !== 0) {  // array has odd length
    middleIndexStart = (arrayLength - 1) / 2;
    middleArr.push(arrayToMiddle[middleIndexStart]);
  }

  return middleArr;

};

module.exports = middle;

// assertArraysEqual(middle([1]), []);
// assertArraysEqual(middle([1, 2]), []);
// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);