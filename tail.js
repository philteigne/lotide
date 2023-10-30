// Returns all but first element in a given array.
const tail = function(array) {
  let returnArr = [];
  for (let i = 1; i < array.length; i++) {
    returnArr.push(array[i]);
  }
  return returnArr;
};

module.exports = tail;