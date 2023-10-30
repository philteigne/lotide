const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe('#findKeyByValue', () => {
  it('returns "drama" for { scifi: "The Expanse", comedy: "Brooklyn Nine-Nine", drama: "The Wire" }, "The Wire"', () => {
    assert.strictEqual(findKeyByValue({ scifi: "The Expanse", comedy: "Brooklyn Nine-Nine", drama: "The Wire" }, "The Wire"), "drama");
  });
  it('returns undefined for { scifi: "The Expanse", comedy: "Brooklyn Nine-Nine", drama: "The Wire" }, "That \'70s Show"', () => {
    assert.strictEqual(findKeyByValue({ scifi: "The Expanse", comedy: "Brooklyn Nine-Nine", drama: "The Wire" }, "That '70s Show"), undefined);
  });
});