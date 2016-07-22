
var express = require("express");
var validator = require('./lib/validator');
var converter = require('./lib/converter');
var timestamp = require('./lib/timestamp');
var app = express();
var getTimeStamp = timestamp.getTimeStamp;

var port = process.env.PORT || 8080;
app.use('/', express.static('public'));

app.get('/:id', function(req, res) {
    console.log(req.params.id);
    res.send(getTimeStamp(req.params.id));
});

app.listen(port, function() {
    console.log('Now listening on port ' + port);
});
