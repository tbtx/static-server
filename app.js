var http = require("http");
var FlexCombo = require("flex-combo/api");

var settings = require("./settings");


var instance = new FlexCombo();
var port = settings.port || 80;

http.createServer(function(req, res) {

    instance.handle(req, res, function() {
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.end("Your combo file not found.");
    });
})
.listen(port);