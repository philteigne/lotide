const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe('#eqObjects', () => {
  it('returns true for { a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }', () => {
    assert.strictEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
  });
  it('returns false for { a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }', () => {
    assert.strictEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
  });
  it('returns false for { a: { y: 0, z: 1 }, b: {c: 2}}, { a: { y: 0, z: 1 }, b: 2 }', () => {
    assert.strictEqual(eqObjects({ a: { y: 0, z: 1 }, b: {c: 2}}, { a: { y: 0, z: 1 }, b: 2 }), false);
  });
});