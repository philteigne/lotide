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

const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {

    let currentLetter = sentence[i];

    if (currentLetter === ' ') {  //  if i is a space ignore it
      continue;
    }

    if (!results[currentLetter]) {  //  if property does not exist create one
      results[currentLetter] = [];
    }

    results[currentLetter].push(i);

  }

  // logic to update results here
  return results;
};

const resultTest = letterPositions('hello');

assertArraysEqual(resultTest['h'], [0]);
assertArraysEqual(resultTest['e'], [1]);
assertArraysEqual(resultTest['l'], [2, 3]);
assertArraysEqual(resultTest['o'], [4]);
