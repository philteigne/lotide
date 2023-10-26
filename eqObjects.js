const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😎😎 Assertion Passed: ${actual} === ${expected} 😎😎`);
  }
  if (actual !== expected) {
    console.log(`💔💔 Assertion Failed: ${actual} !== ${expected} 💔💔`);
  }
  
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

//  Compare two inputted objects and return true or false depending on if they are the same
const eqObjects = function(object1, object2) {
  
  const objectKeys1 = Object.keys(object1);
  const objectKeys2 = Object.keys(object2);

  if (objectKeys1.length !== objectKeys2.length) {  //  if objects are different lengths return false
    return false;
  }

  //  for each key in objectKeys1, check if it exists in objectKeys2, and if the value is the same
  for (let i of objectKeys1) {

    if (object1[i] !== object2[i]) {
      if (typeof object1[i] !== 'object' && typeof object2[i] !== 'object') {
        return false;  //  items are not objects
      }
      if (!Array.isArray(object1[i]) && !Array.isArray(object2[i])) {
        return false;  //  items are not arrays
      }
    }
    //  object values match or are arrays or objects

    if (Array.isArray(object1[i]) && Array.isArray(object2[i])) {
      if (!eqArrays(object1[i], object2[i])) {
        return false;
      }
    }
    //  object values match, or are objects

    if (typeof object1[i] === 'object' && typeof object2[i] === 'object') {
      if (object1[i] !== null) {
        return eqObjects(object1[i], object2[i]);
      }
    }
    //  object values match
  }

  return true;

};

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
const anotherlongSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: { long: '3/4 sleeve', short: 'tank-top'} };

console.log(multiColorShirtObject["sleeveLength"] !== longSleeveMultiColorShirtObject["sleeveLength"]);

assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);

assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
assertEqual(eqObjects(anotherlongSleeveMultiColorShirtObject, anotherlongSleeveMultiColorShirtObject), true);