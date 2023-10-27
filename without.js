const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

const without = function(inputArr, filterArr) {
  
  let cleanArr = [];

  //  Iterate over input array, comparing each element to each element of filterArr
  //  If the element does not match any element in filter, push it to cleanArr
  for (let i = 0; i < inputArr.length; i++) {

    let elementClean = true;

    for (let j = 0; j < filterArr.length; j++) {
      if (inputArr[i] === filterArr[j]) {
        elementClean = false;
      }
    }

    if (elementClean === true) {
      cleanArr.push(inputArr[i]);
    }
  }

  return cleanArr;

};

module.exports = without;

// assertArraysEqual(without([1, 2, 3], [1, 2]), [3]);
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);