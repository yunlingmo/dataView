var express = require('express');
var app = express();
var path = require("path");

// 设定port变量，意为访问端口
app.set('port', process.env.PORT || 3000);

// 设定views变量，意为视图存放的目录
app.set('views', path.join(__dirname, 'views'));

// 设定view engine变量，意为网页模板引擎
app.set('view engine', 'jade');

app.use(function (req, res, next) {
    console.log('path:', req.path)
    next();
})

// 设定静态文件目录，比如本地文件
// 目录为demo/public/images，访问
// 网址则显示为http://localhost:3000/images
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'));

// 路由挂载
var adminRouter = require('./router/index')
app.use('/admin', adminRouter)


