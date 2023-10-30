const assert = require('chai').assert;
const findKey = require('../findKey');

describe('#findKey', () => {
  it('returns "noma" for findKey({ "Blue Hill": { stars: 1 }, "noma": { stars: 2 }}, x => x.stars === 2)', () => {
    assert.strictEqual(findKey({ "Blue Hill": { stars: 1 }, "noma": { stars: 2 }}, x => x.stars === 2), "noma");
  });
  it('returns "Akaleri" for findKey({ "Blue Hill": { stars: 1 }, "Akaleri": { stars: 3 }, "Ora": { stars: 2 }}, x => x.stars === 3)', () => {
    assert.strictEqual(findKey({ "Blue Hill": { stars: 1 }, "Akaleri": { stars: 3 }, "Ora": { stars: 2 }}, x => x.stars === 3), "Akaleri");
  });
});