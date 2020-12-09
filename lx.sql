SET NAMES UTF8;
DROP DATABASE IF EXISTS lx;
CREATE DATABASE lx CHARSET=UTF8;
USE lx;

/**用户信息**/
CREATE TABLE lx_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32),
  email VARCHAR(64),
  phone VARCHAR(16),
  avatar VARCHAR(128),        #头像图片路径
  user_name VARCHAR(32),      #用户名，如王小明
  gender BOOL                  #性别  0-女  1-男
);
/**插入用户信息**/
INSERT INTO lx_user VALUES
(NULL, 'jingjing', '123456', 'jing@qq.com', '13501234567', 'img/avatar/default.png', '王静怡', '0'),
(NULL, 'xinxin', '123456', 'xin@qq.com', '13501234568', 'img/avatar/default.png', '姚鑫', '1'),
(NULL, 'fangfang', '123456', 'fang@qq.com', '13501234569', 'img/avatar/default.png', '方振豪', '1'),
(NULL, 'tiantian', '123456', 'tian@qq.com', '13501234560', 'img/avatar/default.png', '周甜甜', '0'),
(NULL, 'tangtang', '123456', 'tang@qq.com', '13501234560', 'img/avatar/default.png', '唐励子', '0'),
(NULL, 'lili', '123456', 'lili@qq.com', '13501234560', 'img/avatar/default.png', '黎小哈', '0');

#创建数据表lx_team
CREATE TABLE lx_team(
  tid INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(32)
);
#
#创建数据表lx_team_teacher
CREATE TABLE lx_team_teacher(
  ttid INT PRIMARY KEY AUTO_INCREMENT,
  team_id INT,       #国内外
  ttname VARCHAR(100),
  sex	BOOL,
  intro	VARCHAR(100),#详细介绍
  back	VARCHAR(100),#教育背景
  good  VARCHAR(100),#擅长领域
  fuwu	VARCHAR(100),#服务项目
  exper	VARCHAR(3000)#个人经历
);
#
#创建数据表lx_server
CREATE TABLE lx_server(
  sid INT PRIMARY KEY
  AUTO_INCREMENT,
  title BOOL,#文书/申请
  name VARCHAR(32)
);
#
#创建数据表lx_server_detail
CREATE TABLE lx_server_detail(
  sdId         INT PRIMARY KEY AUTO_INCREMENT,
  serverid     INT,            #服务类型
  intro	       VARCHAR(100),   #服务介绍
  aaaaa        VARCHAR(100),   #适合人群
  teacher      VARCHAR(100),   #大纲教师
  liucheng     VARCHAR(100),   #服务流程
  youxiao_time BIGINT,         #有效时间
  price	       DECIMAL(7,2),   #价格
  xvzhi        VARCHAR(100)    #用户须知
);
#
#创建数据表lx_order
CREATE TABLE lx_order(
  oid INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,
  status INT,        #服务状态
  order_time BIGINT, #订单时间
  pay_time BIGINT,   #支付时间
  jwuu_time BIGINT,  #结束时间
  server_time BIGINT #服务时间
);
#
#创建数据表lx_order_detail
CREATE TABLE lx_order_detail(
  did INT PRIMARY KEY AUTO_INCREMENT,
  order_id INT,
  server_id INT,
  count INT
);
