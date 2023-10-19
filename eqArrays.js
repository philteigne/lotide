const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😎😎 Assertion Passed: ${actual} === ${expected} 😎😎`);
  }
  if (actual !== expected) {
    console.log(`💔💔 Assertion Failed: ${actual} !== ${expected} 💔💔`);
  }
  
};

const eqArrays = function (arr1, arr2) {

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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);