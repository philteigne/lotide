const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe('#countOnly', () => {
  it('returns 1 for countOnly(["Jason", "Agouhanna", "Fang", "Fang"], {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false})["Jason"]', () => {
    assert.strictEqual(countOnly(["Jason", "Agouhanna", "Fang", "Fang"], {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false})['Jason'], 1);
  });
  it('returns undefined for countOnly(["Jason", "Agouhanna", "Fang", "Fang"], {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false})["Karima"]', () => {
    assert.strictEqual(countOnly(["Jason", "Agouhanna", "Fang", "Fang"], {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false})['Karima'], undefined);
  });
  it('returns 2 for countOnly(["Jason", "Agouhanna", "Fang", "Fang"], {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false})["Fang"]', () => {
    assert.strictEqual(countOnly(["Jason", "Agouhanna", "Fang", "Fang"], {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false})['Fang'], 2);
  });
  it('returns undefined countOnly(["Jason", "Agouhanna", "Fang", "Fang"], {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false})["Agouhanna"]', () => {
    assert.strictEqual(countOnly(["Jason", "Agouhanna", "Fang", "Fang"], {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false})['Agouhanna'], undefined);
  });
});