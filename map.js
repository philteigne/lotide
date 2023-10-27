const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

const map = function(arrayToMap, callback) {

  const results = [];

  for (let item of arrayToMap) {
    results.push(callback(item));
  }
  return results;


};

module.exports = map;

// const words = ["ground", "control", "to", "major", "tom"];

// const results1 = map(words, word => word[0]);
// const results2 = map(words, word => word.length);
// const results3 = map(words, word => word.toUpperCase());

// assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
// assertArraysEqual(results2, [6, 7, 2, 5, 3]);
// assertArraysEqual(results3, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);