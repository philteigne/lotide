const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
const anotherlongSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: { long: '3/4 sleeve', short: 'tank-top'} };

describe('#eqObjects', () => {
  it('returns true for multiColorShirtObject, anotherMultiColorShirtObject', () => {
    assert.strictEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);
  });
  it('returns false for multiColorShirtObject, longSleeveMultiColorShirtObject', () => {
    assert.strictEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);
  });
  it('returns true for { a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }', () => {
    assert.strictEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
  });
  it('returns false for { a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }', () => {
    assert.strictEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
  });
  it('returns false for { a: { y: 0, z: 1 }, b: {c: 2}}, { a: { y: 0, z: 1 }, b: 2 }', () => {
    assert.strictEqual(eqObjects({ a: { y: 0, z: 1 }, b: {c: 2}}, { a: { y: 0, z: 1 }, b: 2 }), false);
  });
  it('returns true for anotherlongSleeveMultiColorShirtObject, anotherlongSleeveMultiColorShirtObject', () => {
    assert.strictEqual(eqObjects(anotherlongSleeveMultiColorShirtObject, anotherlongSleeveMultiColorShirtObject), true);
  });
});