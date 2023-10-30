// Returns the first instance that satisfies callback in the given object.
const findKey = function(object, callback) {

  const keys = Object.keys(object);

  for (let i of keys) {
    if (callback(object[i])) {  // if callback evaluates true, return element
      return i;
    }
  }

};

module.exports = findKey;