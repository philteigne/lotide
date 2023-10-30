// Returns array with callback specified adaptations made to each element of the inputted array.
const map = function(arrayToMap, callback) {

  const results = [];

  for (let item of arrayToMap) {  //  execute callback on each item in array
    results.push(callback(item));
  }
  return results;
};

module.exports = map;