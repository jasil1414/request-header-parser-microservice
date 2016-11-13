var express = require('express');
var headerInfo = require('./routes/header_info');// header information fetcher module.

var app = express();
app.set('port',(process.env.PORT ||3000));// port configuration when hosting is done on heroku, Nodejistu or AWS.
app.set('view engine','pug');
app.set('views', './views');

app.get('/', function(req,res){
  res.reder('index');
});
app.get('/whoami', function(req,res){
       res.json(headerInfo(req,res));//respond with json object
});

app.listen(app.get('port'), function(){
  console.log('Listening on port: '+ app.get('port'));
});
