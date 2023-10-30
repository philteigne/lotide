const assert = require('chai').assert;
const map = require('../map');

describe('#map', () => {
  it('returns ["g", "c", "t", "m", "t"] for ["ground", "control", "to", "major", "tom"], word => word[0]', () => {
    assert.deepEqual(map(["ground", "control", "to", "major", "tom"], word => word[0]), ["g", "c", "t", "m", "t"]);
  });
  it('returns [6, 7, 2, 5, 3] for ["ground", "control", "to", "major", "tom"], word => word.length', () => {
    assert.deepEqual(map(["ground", "control", "to", "major", "tom"], word => word.length), [6, 7, 2, 5, 3]);
  });
  it('returns ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"] for ["ground", "control", "to", "major", "tom"], word => word.toUpperCase()', () => {
    assert.deepEqual(map(["ground", "control", "to", "major", "tom"], word => word.toUpperCase()), ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);
  });
});