const assertEqual = require('./assertEqual');

const tail = function(arrTailItems) { //  return everything other than the head of an array
  let returnArr = [];
  for (let i = 1; i < arrTailItems.length; i++) {
    returnArr.push(arrTailItems[i]);
  }
  return returnArr;
};

module.exports = tail;

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words);
// assertEqual(words.length, 3);

// assertEqual(tail([1, 2, 3, 4]).length, 3);
// assertEqual(tail([1, 2, 3, 4])[0], 2);
// assertEqual(tail([1, 2, 3, 4])[1], 3);
// assertEqual(tail([1, 2, 3, 4])[2], 4);

// assertEqual(tail([1]).length, 0);
// assertEqual(tail([1])[0], undefined);

// assertEqual(tail([]).length, 0);
// assertEqual(tail([])[0], undefined);