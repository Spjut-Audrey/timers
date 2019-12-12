var express = require("express");
var port = process.env.PORT || 5000;

var app = express();

app.get(‘/’, function (req, res) {
});
app.listen(port, function () {
 console.log(`Example app listening on port !`);
});