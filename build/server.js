import express from 'express';
import path from 'path';
import open from 'open';

const port = 3000 || process.env.PORT;
//dev env
const dev_env = process.env.DEVELOPMENT || 'development';
//express()
const app = express();
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
