var validator = require('./validator');
var converter = require('./converter');

var validateUNIX = validator.validateUNIX;
var validateNatural = validator.validateNatural;

module.exports = {
  getTimeStamp: function(id) {
    if (validateUNIX(id)) {
      return "unix";
    } else if (validateNatural(id)) {
      return "natural";
    } else {
      return {unix: null, natural: null};
    }
  }
};
