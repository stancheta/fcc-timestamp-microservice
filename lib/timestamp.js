var validator = require('./validator');
var converter = require('./converter');

var validateUNIX = validator.validateUNIX;
var validateNatural = validator.validateNatural;
var convertUtoN = converter.convertUtoN;
var convertNtoU = converter.convertNtoU;

module.exports = {
  getTimeStamp: function(id) {
    var result = {unix: null, natural: null};
    if (validateUNIX(id)) {
      result.unix = parseInt(id);
      result.natural = convertUtoN(id);
      return result;
    } else if (validateNatural(id)) {
      result.natural = id;
      result.unix = convertNtoU(id);
      return result;
    } else {
      return result;
    }
  }
};
