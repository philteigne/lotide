const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

const resultTest = letterPositions('hello');

describe('#letterPositions', () => {
  it('returns [0] for resultTest["h"]', () => {
    assert.deepEqual(resultTest['h'], [0]);
  });
  it('returns [1] for resultTest["e"]', () => {
    assert.deepEqual(resultTest['e'], [1]);
  });
  it('returns [2, 3] for resultTest["l"]', () => {
    assert.deepEqual(resultTest['l'], [2, 3]);
  });
  it('returns [4] for resultTest["o"]', () => {
    assert.deepEqual(resultTest['o'], [4]);
  });
});