import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */

const port = 3000 || process.env.PORT;
//dev env
const dev_env = process.env.DEVELOPMENT || 'development';
//express()
const app = express();
app.use(compression());
app.use(express.static('dist'));

//get
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname,'../dist/index.html'));
});

//users
app.get('/users',function(req,res){
  //hard-coded
  res.json([
    {"id": 1,"firstName":"A","lastName":"B","email":"a@gmail.com"},
    {"id": 2,"firstName":"C","lastName":"D","email":"c@gmail.com"},
    {"id": 3,"firstName":"E","lastName":"F","email":"e@gmail.com"}
  ]);
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
