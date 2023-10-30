// Returns all characters in a string up until the callbacks conditions are met.
const takeUntil = function(array, callback) {

  let results = [];

  for (let i of array) {
    if (callback(i)) {  // if callback evaluates to true, stop iteration and return results
      return results;
    }

    results.push(i);
  }

  return results;

};

module.exports = takeUntil;