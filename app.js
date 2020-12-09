const express=require('express');
const proRouter=require('./routes/pro.js');
//引入body_parser中间件模块
const bodyParser=require('body-parser');
let app=express();
app.listen(8080);
app.use(express.static('pro'));
//使用body_parser中间件
app.use(bodyParser.urlencoded({
  extended:false
}));
//挂载路由器，并给URL添加前缀/user
app.use('/pro',proRouter);
//console.log(userRouter);