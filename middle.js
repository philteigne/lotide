const eqArrays = function(arr1, arr2) {

  if (arr1.length !== arr2.length) {  //  If arrays are different sizes, return false
    return false;
  }

  for (let i = 0; i < arr1.length; i++) { // Iterate over both arrays, and compare elements
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

const assertArraysEqual = function(arr1, arr2) {

  let equalArrays = eqArrays(arr1, arr2);

  if (equalArrays) {
    console.log(`😎😎 Assertion Passed: ${arr1} === ${arr2} 😎😎`);
  }

  if (!equalArrays) {
    console.log(`💔💔 Assertion Failed: ${arr1} !== ${arr2} 💔💔`);
  }

};

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

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);