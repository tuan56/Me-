const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建路由器对象
let router=express.Router();
//在路由器下添加路由
//1.restful登录模块
router.get("/v1/login/:uname&:upwd",(req,res)=>{
	var $uname=req.params.uname;
	var $upwd=req.params.upwd;
	var sql="select * from lx_user where uname=? and upwd=?";
	pool.query(sql,[$uname,$upwd],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send("1");
		}else{
			res.send("0");
		}
	});
});
//2.查询用户
router.get("/v1/userlist",(req,res)=>{
	var sql="select * from lx_user";
	pool.query(sql,(err,result)=>{
		if(err) throw err;
		res.send(result);
	});
});
//3.根据ID删除用户
router.delete("/v1/deluser/:uid",(req,res)=>{
	var $uid=req.params.uid;
	var sql="delete from lx_user where uid=?";
	pool.query(sql,[$uid],(err,result)=>{
		if(err) throw err;
		res.send("1");
	});
});
//4.根据id查询一个用户
router.get("/v1/searchuser/:uid",(req,res)=>{
	var $uid=req.params.uid;
	var sql="select * from lx_user where uid=?";
	pool.query(sql,[$uid],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send(result[0]);
		}else{
			res.send("0");
		}
	});
});
//5.根据id修改某个用户信息
router.put("/v1/updatauser",(req,res)=>{
	var $uid=req.body.uid;
	var $uname=req.body.uname;
	var $email=req.body.email;
	var $phone=req.body.phone;
	var $user_name=req.body.user_name;
	var $gender=req.body.gender;
	var sql="update lx_user set uname=?,email=?,phone=?,user_name=?,gender=? where uid=?";
	pool.query(sql,[$uname,$email,$phone,$user_name,$gender,$uid],(err,result)=>{
		if(err) throw err;
		res.send("1");
	});
});
//6.注册新用户
//6.1根据用户名查询用户
router.get("/v1/checkuname/:uname",(req,res)=>{
	var $uname=req.params.uname;
	var sql="select * from lx_user where uname=?";
	pool.query(sql,[$uname],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send("1");
		}else{
			res.send("0");
		}
	});
});
//6.2注册新用户
router.post("/v1/reguser",(req,res)=>{
	var $uid=req.body.uid;
	var $uname=req.body.uname;
	var $upwd=req.body.upwd;
	var $email=req.body.email;
	var $phone=req.body.phone;
	var $user_name=req.body.user_name;
	var $gender=req.body.gender;
	var sql="insert into lx_user value(null,?,?,?,?,null,?,?)";
	pool.query(sql,[$uname,$pwd,$email,$phone,$user_name,$gender],(err,result)=>{
		if(err) throw err;
		console.log(result);
		if(result.affectedRows>0){
			res.send("1");
		}else{
			res.send("0");
		}
	});
});
//导出路由器对象
module.exports=router;