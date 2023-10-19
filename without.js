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

    elementClean = false;
  }

  return cleanArr;

};

assertArraysEqual(without([1, 2, 3], [1, 2]), [3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);