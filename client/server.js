const express = require('express');
const next = require('next');

const port = 3000;

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();
const server = express();

server.get('/post/:id',(req,res)=>{
  const actualPage = '/about';
  const queryParams = {id:req.params.id};
  app.render(req,res,actualPage,queryParams);
});

server.get('*',(req,res) =>{
  return handle(req,res);
});

app.prepare().then(()=>{
  server.listen(port,(err)=>{
    if(err){
      throw err;
    }
    console.log('NextJS is ready on http://localhost:'+port);
  })
}).catch((e) =>{
  console.error(e.stack);
  process.exit(1);
});
