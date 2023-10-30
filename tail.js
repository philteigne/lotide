const tail = function(array) { //  return everything other than the head of an array
  let returnArr = [];
  for (let i = 1; i < array.length; i++) {
    returnArr.push(array[i]);
  }
  return returnArr;
};

module.exports = tail;