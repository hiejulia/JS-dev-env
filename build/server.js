var express = require('express');
var path = require('path');
var open = require('open');

var port = 3000 || process.env.PORT;
var dev_env = process.env.DEVELOPMENT || 'development';
//express()
var app = express();
//get
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname,'../src/index.html'));
});
//listen
app.listen(port,function(err){
  if(err){
    console.error(err);
  }
  else{
    open('http://localhost:'+port);
  }
});
