// Returns true if the two given arrays are identical, return false if they are not.
const eqArrays = function(arr1, arr2) {

  if (arr1.length !== arr2.length) {  //  If arrays are different sizes, return false
    return false;
  }

  for (let i = 0; i < arr1.length; i++) { // Iterate over both arrays, and compare elements
    
    if (arr1[i] !== arr2[i]) {
      if (!Array.isArray(arr1[i]) || !Array.isArray(arr2[i])) {
        return false;
      }
    }
    //  values are equal or arrays

    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
      if (!eqArrays(arr1[i], arr2[i])) {
        return false;
      }
    }
    //  values are equal
  }
  return true;
};

module.exports = eqArrays;