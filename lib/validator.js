module.exports = {
  validateUNIX: function(unixTime) {
    var unixRegex = /^(-)?\d{1,10}$/g
    return unixRegex.test(unixTime) && unixTime >= -2147483648 && unixTime <= 2147483647;
  },
  validateNatural: function(natural) {
    var naturalRegex = /^\w{3,8} \d{1,2}, \d{4}$/gi
    var MINDATE = -2147529600000;
    var MAXDATE = 2147500800000;
    var monthArr = ['january', 'february', 'march', 'april', 'may', 'june', 'july',
                    'august', 'september', 'october', 'november', 'december'];
    if(!naturalRegex.test(natural)) return false; //check for format eg May 1, 2016
    var d = natural.split(' ');
    var month = d[0].toLowerCase();
    var day = parseInt(d[1].slice(0, -1));
    if((monthArr.indexOf(month) < 0) || day > 31 || day < 1) return false;
    var formattedDate = Date.parse(natural);
    return  formattedDate >= MINDATE && formattedDate <= MAXDATE;
  }
};
