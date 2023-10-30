const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe('#countLetters', () => {
  it('returns 2 for countLetters("LHL")["L"]', () => {
    assert.strictEqual(countLetters('LHL')['L'], 2);
  });
  it('returns 1 for countLetters("LHL")["H"]', () => {
    assert.strictEqual(countLetters('LHL')['H'], 1);
  });
  it('returns [] for countLetters([])', () => {
    assert.deepEqual(countLetters([]), {});
  });
});
