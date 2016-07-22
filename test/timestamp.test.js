var chai = require('chai');
var timestamp = require('../lib/timestamp');
var assert = chai.assert;
var getTimeStamp = timestamp.getTimeStamp;
describe('Timestamp Microservice', function() {
  describe('Sending Different Queries', function() {
    it('should stay in the range of a int32 unix timestamp', function() {
      assert.equal(JSON.stringify({unix:null, natural:null}), JSON.stringify(getTimeStamp('December 12, 1901')), 'returns a value lesser than min');
      assert.equal(JSON.stringify({unix:-2147483648, natural:'December 13, 1901'}), JSON.stringify(getTimeStamp('December 13, 1901')), 'does not return min');
      assert.equal(JSON.stringify({unix:null, natural:null}), JSON.stringify(getTimeStamp('January 20, 2038')), 'returns a value greater than max');
      assert.equal(JSON.stringify({unix:2147472000, natural:'January 19, 2038'}), JSON.stringify(getTimeStamp('January 19, 2038')), 'does not return max');
      assert.equal(JSON.stringify({unix:null, natural:null}), JSON.stringify(getTimeStamp('-2147483649')), 'returns a value lesser than min unix');
      assert.equal(JSON.stringify({unix:-2147483648, natural:'December 13, 1901'}), JSON.stringify(getTimeStamp('-2147483648')), 'does not return min unix');
      assert.equal(JSON.stringify({unix:null, natural:null}), JSON.stringify(getTimeStamp('2147483648')), 'returns a value greater than max unix');
      assert.equal(JSON.stringify({unix:2147483647, natural:'January 19, 2038'}), JSON.stringify(getTimeStamp('2147483647')), 'does not return max unix');
    });
    it('should be able to return valid dates', function() {
      assert.equal(JSON.stringify({unix:0, natural:'January 1, 1970'}), JSON.stringify(getTimeStamp('0')), 'does not return valid JSON for 0');
      assert.equal(JSON.stringify({unix:0, natural:'January 1, 1970'}), JSON.stringify(getTimeStamp('January 1, 1970')), 'does not return valid JSON for January 1, 1970');
    });
    it('should return "null" responses to invalid input', function() {
      assert.equal(JSON.stringify({unix: null, natural: null}), JSON.stringify(getTimeStamp('asdf')), 'does not return null for "asdf"');
      assert.equal(JSON.stringify({unix:null, natural:null}), JSON.stringify(getTimeStamp('1111-111')), 'does not return null for "1111-111"');
      assert.equal(JSON.stringify({unix:null, natural:null}), JSON.stringify(getTimeStamp('Mary 5, 2015')), 'does not return null for "Mary 5, 2015"');
    });
  });
});
