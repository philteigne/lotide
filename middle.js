// Returns the middle element in a given array of at least length 3.
// If the array has an equal number of elements it will return both middle elements.
const middle = function(arrayToMiddle) {

  let arrayLength = arrayToMiddle.length;

  let middleArr = [];
  let middleIndexStart;

  if (arrayLength < 3) {  //  no middle if array length is less than 3
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

module.exports = middle;