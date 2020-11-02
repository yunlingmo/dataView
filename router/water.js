var express = require('express')
var router = express.Router()

router.get('/water/list', function(req, res){
    res.send('水质量列表')
})

module.exports = router