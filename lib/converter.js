module.exports = {
  convertUtoN: function(unixTime) {
    var monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
                    'August', 'September', 'October', 'November', 'December'];
    var date = new Date(parseInt(unixTime) * 1000);
    var offsetDate = new Date(date.getTime() + (date.getTimezoneOffset() * 60000));
    return monthArr[offsetDate.getMonth()] + ' ' + offsetDate.getDate() + ', ' + offsetDate.getFullYear();
  },
  convertNtoU: function(naturalTime) {
    var date = new Date(Date.parse(naturalTime));
    var offsetDate = new Date(date.getTime() - (date.getTimezoneOffset() * 60000));
    return offsetDate.getTime() / 1000;
  }
};
