var express = require('express');
var app = express();
var loginController = require('./controller/loginController');
app.set('view engine','ejs');
app.use(express.static('./public'));
loginController(app);

var bodyParser = require('body-parser');
app.set('port', (process.env.PORT || 80));

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

const server = app.listen(app.get('port'), function(port) {
    console.log('Listening on '+ app.get('port'))
});

app.get('/', function (req, res) {
 res.send('Listening')
});

module.exports = server;

