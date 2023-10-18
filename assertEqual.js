const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😎😎 Assertion Passed: ${actual} === ${expected} 😎😎`);
  }
  if (actual !== expected) {
    console.log(`💔💔 Assertion Failed: ${actual} !== ${expected} 💔💔`);
  }
  
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([5]), 5);
assertEqual(head([]), 5);