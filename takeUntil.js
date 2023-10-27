const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

const takeUntil = function(array, callback) {

  let results = [];

  for (let i of array) {
    if (callback(i)) {
      return results;
    }

    results.push(i);
  }

  return results;

};

module.exports = takeUntil;

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');

// assertArraysEqual(results1, [1, 2, 5, 7, 2]);
// assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);