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
  }

  return cleanArr;

};

module.exports = without;