// Return true if the two given objects are identical, return false if they are not.
const eqArrays = require('./eqArrays');

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

      if (typeof object1[i] !== 'object' || typeof object2[i] !== 'object') {
        return false;
      }

    }
    //  values match or are arrays or objects

    if (Array.isArray(object1[i]) && Array.isArray(object2[i])) {
      if (!eqArrays(object1[i], object2[i])) {
        return false;
      }
    }
    //  values match, or are objects

    if (typeof object1[i] === 'object' && typeof object2[i] === 'object') {
      if (object1[i] !== null && !eqObjects(object1[i], object2[i])) {
        return false;
      }
    }
    //  values match
  }

  return true;

};

module.exports = eqObjects;