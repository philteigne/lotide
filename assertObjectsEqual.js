const eqObjects = function(object1, object2) {
  
  const objectKeys1 = Object.keys(object1);
  const objectKeys2 = Object.keys(object2);

  if (objectKeys1.length !== objectKeys2.length) {  //  if objects are different lengths return false
    return false;
  }

  //  for each key in objectKeys1, check if it exists in objectKeys2, and if the value is the same
  for (let i of objectKeys1) {

    if (object1[i] !== object2[i] && !Array.isArray(object1[i])) {
      return false;
    }
    //  object values match or are arrays or objects

    if (Array.isArray(object1[i]) && Array.isArray(object2[i])) {
      if (!eqArrays(object1[i], object2[i])) {
        return false;
      }
    }
    //  object values match, arrays included (objects not handled)
  }

  return true;

};

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

const assertObjectsEqual = function(actual, expected) {

  const inspect = require('util').inspect;

  let equalObjects = eqObjects(actual, expected);

  if (equalObjects) {
    console.log(`😎😎 Assertion Passed: ${inspect(actual)} === ${inspect(expected)} 😎😎`);
  }

  if (!equalObjects) {
    console.log(`💔💔 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)} 💔💔`);
  }

};

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };

assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject);
assertObjectsEqual(longSleeveMultiColorShirtObject, anotherMultiColorShirtObject);

