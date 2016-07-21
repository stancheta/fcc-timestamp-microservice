
var express = require("express");
var app = express();

app.use('/', express.static('public'));

app.get('/:id', function(req, res) {
    console.log(req.params.id);
    res.send(req.params.id);
});

app.listen(8080, function() {
    console.log('Now listening on port 8080');
});
