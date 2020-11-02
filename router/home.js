var express = require('express')
var router = express.Router()
var db = require("../db"); //引入数据库封装模块

router.get('/home/list/:id', function(req, res){
    console.log(req.params.id)
    //查询users表
    db.query("SELECT * FROM home_table",[],function(results,fields){
      console.log(JSON.parse(JSON.stringify(results)));
      res.send(`首页列表${JSON.stringify(results)}`)
    })
})

router.get('/home/calander', function(req, res){
  console.log(req.query)
  const queryCondition = `select * from calendar_table where date >= "${req.query.startDay}" and date <= "${req.query.endDay}"`
  console.log('queryCondition', queryCondition)
  //查询users表
  db.query(queryCondition,[],function(results){
    const result = {
      code: 200,
      data: results,
      message: '请求成功'
    }
    res.send(result)
  })
})

module.exports = router