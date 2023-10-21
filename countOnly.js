const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😎😎 Assertion Passed: ${actual} === ${expected} 😎😎`);
  }
  if (actual !== expected) {
    console.log(`💔💔 Assertion Failed: ${actual} !== ${expected} 💔💔`);
  }
  
};

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

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);