
var express = require("express");
var validator = require('./lib/validator');
var converter = require('./lib/converter');
var timestamp = require('./lib/timestamp');
var app = express();
var getTimeStamp = timestamp.getTimeStamp;
app.use('/', express.static('public'));

app.get('/:id', function(req, res) {
    console.log(req.params.id);
    res.send(getTimeStamp(req.params.id));
});

app.listen(8080, function() {
    console.log('Now listening on port 8080');
});
