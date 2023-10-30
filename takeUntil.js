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