var express = require('express');
var path = require('path');   //找路径
var favicon = require('serve-favicon'); //icon包
var logger = require('morgan');  // 打印错误提示，输出错误日志
var cookieParser = require('cookie-parser');  //解析cookie到req.cookies
var bodyParser = require('body-parser');    //解析post请求参数到req.body中
var multer = require("multer");   //解析post请求中的文件到req.file 或 req.files中

var routes = require('./routes/index');
var users = require('./routes/users');   //导入文件

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views')); //设置视图文件所在的文件夹
// __dirname 返回当前文件夹路径   'express' + '/views'
// path.join(__dirname, 'views')  'express/views'
app.set('view engine', 'hbs');  //设置视图解析引擎

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));  //控制台输出日志
app.use(bodyParser.json());  //解析json数据格式到req.body
app.use(bodyParser.urlencoded({ extended: false })); //解析urlencoded数据格式到req.body（a=1&b=2）
app.use(cookieParser());  //解析cookie到req.cookies
app.use(require('less-middleware')(path.join(__dirname, 'public')));//解析public文件夹下的less文件
app.use(express.static(path.join(__dirname, 'public'),{
  maxAge: 1000 * 60 * 60
}));   //指向静态文件

app.use('/', routes);  //使用中间件 匹配path
app.use('/users', users);//匹配 路径 /users 或 /users/123

// catch 404 and forward to error handler     找不到 的错误回调
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {    //开发模式的报错的回调
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {  //生产模式的服务器逻辑错误回调
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
