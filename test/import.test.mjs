import 'mocha';
import assert from "node:assert";
import colors from '../index.js';

describe('ESM Import', () => {
  it(`should 'colors', NOT 'colors.default'`, () => {
    assert.equal(typeof colors, 'object');
    assert.equal(typeof colors.default, 'undefined');
  })
})