const express = require('express');
const next = require('next');

const port = 3000;

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();


app.prepare().then(()=>{

  const server = express();

  server.get('/product/:id',(req,res)=>{
    console.log('Product Id',req.params.id);
    const actualPage = '/productDetails';
    const queryParams = {id:req.params.id};
    console.log('Query Params',queryParams);
    app.render(req,res,actualPage,queryParams);
  });

  server.get('*',(req,res) =>{
    return handle(req,res);
  });

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
