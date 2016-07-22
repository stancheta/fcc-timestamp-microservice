var chai = require("chai");
var validator = require("../lib/validator");
var assert = chai.assert;
var validateUNIX = validator.validateUNIX;
var validateNatural = validator.validateNatural;

describe('Time Validator', function() {
  describe('Validating Unix Time', function() {
    it('should return a boolean', function() {
      assert.equal('boolean', typeof(validateUNIX('0')), 'Did not return a boolean');
    });
    it('should return false when date is above max unix time', function() {
      assert.equal(false, validateUNIX("2147483648"));
    });
    it('should return false when date is below min unix time', function() {
      assert.equal(false, validateUNIX("-2147483649"));
    });
    it('should return false when invalid input is entered', function() {
      assert.equal(false, validateUNIX("1234f"), '1234f has returned true');
      assert.equal(false, validateUNIX("11111111111"), 'has accepted a number with more than 10 digits');
      assert.equal(false, validateUNIX("-11111111111"), 'has accepted a negative number with more than 10 digits');
    });
    it('should return true for max unix time', function() {
      assert.equal(true, validateUNIX("2147483647"));
    });
    it('should return true for min unix time', function() {
      assert.equal(true, validateUNIX("-2147483648"));
    });
    it('should return true for int with 1 to 10 digits', function() {
      var testString = "";
      for(var i = 0; i < 10; i++) {
        testString += '1';
        assert.equal(true, validateUNIX(testString));
        // console.log(testString);
      }
    });
    it('should return true for negative int with 1 to 10 digits', function() {
      var testString = "-";
      for(var i = 0; i < 10; i++) {
        testString += '1';
        assert.equal(true, validateUNIX(testString));
        // console.log(testString);
      }
    });
    it('should return true for 1469130808', function() {
      assert.equal(true, validateUNIX("1469130808"));
    });
    it('should return true for -1469130808', function() {
      assert.equal(true, validateUNIX("-1469130808"));
    });
  });
  describe('Validating Natural Time', function() {
    it('should return a boolean', function() {
      assert.equal('boolean', typeof(validateNatural('0')), 'Did not return a boolean');
    });
    it('should return false when date is above max unix time', function() {
      assert.equal(false, validateNatural("January 20, 2038"), "Accepts Date above max date");
    });
    it('should return false when date is below min unix time', function() {
      assert.equal(false, validateNatural("December 12, 1901"), "Accepts Date below min date");
    });
    it('should return false when invalid input is entered', function() {
      assert.equal(false, validateNatural("asdfhg"), "accepted Mary 13, 2013");
      assert.equal(false, validateNatural("Mary 13, 2013"), "accepted Mary 13, 2013");
    });
    it('should return true for max unix time', function() {
      assert.equal(true, validateNatural("January 19, 2038"));
    });
    it('should return true for min unix time', function() {
      assert.equal(true, validateNatural("December 13, 1901"));
    });
    it('should return true for july 21, 2016', function() {
      assert.equal(true, validateNatural("july 21, 2016"), "does not work for all lowercase month");
    });
    it('should return true for JULY 21, 2016', function() {
      assert.equal(true, validateNatural("JULY 21, 2016"), "does not work for all uppercase month");
    });
    it('should return true for June 13, 1923', function() {
      assert.equal(true, validateNatural("June 13, 1923"));
    });
  });
});
