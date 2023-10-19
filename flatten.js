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

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);