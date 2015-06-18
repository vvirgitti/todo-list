var express = require('express');
var app = express();

app.use(express.static(__dirname, '/public'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://localhost', host, port);

});

module.exports = server;
