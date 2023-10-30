const flatten = function(arrToFlatten) {

  let flatArr = [];

  for (let i of arrToFlatten) {

    let arrayCheck = Array.isArray(i);

    if (!arrayCheck) {
      flatArr.push(i);
    }

    if (arrayCheck) {
      for (let j of i) {
        flatArr.push(j);
      }
    }

  }

  return flatArr;

};

module.exports = flatten;