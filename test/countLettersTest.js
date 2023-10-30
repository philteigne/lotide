const assert = require('chai').assert;
const countLetters = require('../countLetters');

const countLettersResult = countLetters('LHL');

describe('#countLetters', () => {
  it('returns 2 for countLettersResult["L"]', () => {
    assert.strictEqual(countLettersResult['L'], 2);
  });
  it('returns 1 for countLettersResult["H"]', () => {
    assert.strictEqual(countLettersResult['H'], 1);
  });
  it('returns [] for countLetters([])', () => {
    assert.deepEqual(countLetters([]), {});
  });
});
