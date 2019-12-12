var express = require("express");
var port = process.env.PORT || 5000;

var app = express();

app.use(express.static("public"));
app.use(express.json() );

app.listen(port, function () {
 console.log('App listening on port ' + port);
});

app.get('/', function (req, res) {
    console.log("Received a request for /");
  });

//functions

