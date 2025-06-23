require('mocha');
const assert = require("node:assert");
const colors = require('../index.js');

describe('CommonJS import', () => {
  it(`should 'colors', NOT 'colors.default'`, () => {
    assert.equal(typeof colors, 'object');
    assert.equal(typeof colors.default, 'undefined');
  })
})