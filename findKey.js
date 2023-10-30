const findKey = function(object, callback) {

  const keys = Object.keys(object);

  for (let i of keys) {
    if (callback(object[i])) {
      return i;
    }
  }

};

module.exports = findKey;