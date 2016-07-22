var chai = require('chai');
var converter = require('../lib/converter');
var assert = chai.assert;
var convertUtoN = converter.convertUtoN;
var convertNtoU = converter.convertNtoU;
describe('Time Converter', function() {
  describe('Converting Unix Time to Natural Language Time', function() {
    it('should return January 19, 2038 when given 2147483647', function() {
      assert.equal('January 19, 2038', convertUtoN('2147483647'));
    });
    it('should return December 13, 1901 when given -2147483648', function() {
      assert.equal('December 13, 1901', convertUtoN('-2147483648'));
    });
    it('should return January 1, 1970 when given 1', function() {
      assert.equal('January 1, 1970', convertUtoN('1'));
    });
    it('should return January 1, 1970 when given 0', function() {
      assert.equal('January 1, 1970', convertUtoN('0'));
    });
    it('should return December 31, 1969 when given -1', function() {
      assert.equal('December 31, 1969', convertUtoN('-1'));
    });
  });
  describe('Converting Natural Language Time to Unix Time', function() {
    it('should return 2147472000 when given January 19, 2038', function() {
      assert.equal('2147472000', convertNtoU('January 19, 2038'));
    });
    it('should return -2147483648 when given December 13, 1901', function() {
      assert.equal('-2147483648', convertNtoU('December 13, 1901'));
    });
    it('should return 0 when given January 1, 1970', function() {
      assert.equal('0', convertNtoU('January 1, 1970'));
    });
    it('should return 0 when given January 1, 1970', function() {
      assert.equal('0', convertNtoU('January 1, 1970'));
    });
    it('should return -86400 when given December 31, 1969', function() {
      assert.equal('-86400', convertNtoU('December 31, 1969'));
    });
  });
});
