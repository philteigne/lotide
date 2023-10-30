//  Given an array and an object return an object containing counts of everything that the input object listed
//  allItems: an array of strings that we need to look through
//  itemsToCount: and object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {

    if (!itemsToCount[item]) {  //  do not count items listed as false
      continue;
    }

    if (!results[item]) {
      results[item] = 0;
    }

    results[item]++;

  }

  return results;
};

module.exports = countOnly;