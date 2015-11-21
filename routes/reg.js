/**
 * Created by Administrator on 2015/11/20.
 */
var express = require('express');
var router = express.Router();
//var usr = require('../serverConn');
/* GET reg page. */
router.get('/',function (req, res) {
    res.render('reg', {title: '注册Todo'});
});
/*.post('/',function (req, res) {
    var client = usr.connect();
    usr.insertFun(client, req.body.username, req.body.password2, function (err) {
        if (err) throw err;
        res.send('注册成功');
    });
});*/
module.exports = router;
