// Returns a 1 dimensional array given an array with nested elements.
const flatten = function(arrToFlatten) {

  let flatArr = [];

  for (let i of arrToFlatten) {

    let arrayCheck = Array.isArray(i);

    if (!arrayCheck) {  // item is not array
      flatArr.push(i);
    }

    if (arrayCheck) { //  item is array
      for (let j of flatten(i)) { //  run flatten() over nested array and iterate over its return
        flatArr.push(j);
      }
    }
  }
  return flatArr;
};

module.exports = flatten;