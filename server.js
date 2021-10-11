// const http =require('http');
const express=require('express');
const app=express();
const path=require('path');
const router=express.Router();
const port=5000;

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
});

router.get('/about',function(req,res){
    res.sendFile(path.join(__dirname+'/about.html'));
});
router.get('/login',function(req,res){
    res.sendFile(path.join(__dirname+'/auth.html'));
});
// const server =http.createServer((req,res)=>{
//     res.statusCode=200;
//     res.setHeader('Content-Type','text/plain');
   

// });

// server.listen(port,()=>{
//     console.log(`server is running at localhost:${port}`);
// })
app.use('/', router);
app.listen(process.env.port || 5000);
console.log('Running at Port 5000');