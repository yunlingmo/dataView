var mysql = require('mysql')
var dbConfig = require('./config/mysql')

module.exports = {
    query: function(sql, params, callback){
        //每次使用的时候需要创建链接，数据操作完成之后要关闭连接
        var connection = mysql.createConnection(dbConfig);
        connection.connect(function(err){
            if(err){
                console.log('数据库连接失败');
                throw err;
            }
            // 连接成功，开始数据库操作
            connection.query(sql, params, function(err,results,fields){
                if(err){
                    console.log('数据库操作失败');
                    throw err;
                }
                //将查询出来的数据返回给回调函数，这个时候就没有必要使用错误前置的思想了，因为我们在这个文件中已经对错误进行了处理，如果数据检索报错，直接就会阻塞到这个文件中
                callback && callback(JSON.parse(JSON.stringify(results)), JSON.parse(JSON.stringify(fields)));
                // 数据库断开连接
                connection.end(function(err){
                    if(err){
                        console.log('关闭数据库连接失败！');
                        throw err;
                    }
                });
            })
        })
    }
}

// var mysql      = require('mysql');
// var connection = mysql.createConnection({
//     host: "192.168.137.184",
//     user: "root",
//     password: "mo123456",
//     database: "suidata"
// });
 
// connection.connect();
 
// connection.query('SELECT * from home_table', function(err, data, fields) {
//   if (err) {
//     console.log(err);
//     return;
//   };
 
//   console.log(data);
// });
 
// connection.end();