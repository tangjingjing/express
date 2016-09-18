var express = require('express');
var router = express.Router();

//  /users            ===> /
//  /users/id       ===> /id
//  /users/123        ===> /123


/* GET users listing. */
router.all('*')

router.post('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.delete('/id', function(req, res, next) {// request , response
  res.render('1/index', { title: 'Express' });//渲染 render  文件名 或者 路径   传参
});

router.get('/:id', function(req, res, next) {
  //res.send('1231231231'); //发送数据 我能转什么转什么
  //res.json({ data : 1});//转换为json
});


// all get查 post改 put增 delete删
module.exports = router;
