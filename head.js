const assertEqual = require('./assertEqual');

const head = function(arrFirstItem) {
  return arrFirstItem[0];
};

module.exports = head;

// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head([5]), 5);
// assertEqual(head([]), 5);