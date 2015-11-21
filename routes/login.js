/**
 * Created by Administrator on 2015/11/20.
 */
var express = require('express');
var router = express.Router();
var usr = require('../serverConn');


/* GET login page. */
router.get('/', function (req, res, next) {
    if (req.session.islogin) {
        res.locals.islogin = req.session.islogin;
    }
    if (req.cookies.islogin) {
        req.session.islogin = req.cookies.islogin;
    }
    res.render('login', {title: 'LOGIN', test: res.locals.islogin});



}).post('/login_submit',function (req, res) {
    var client = null;//usr.connect(); 返回连接对象
    usr.selectFun(client, req.body.username, function (result) {
        if (result[0] === undefined) {
            res.send('fail to login');
        } else {
            if (result[0].password === req.body.password) {
                req.session.islogin = req.body.username;
                res.locals.islogin = req.session.islogin;
                res.cookie('islogin', res.locals.islogin, {maxAge: 60000});
                res.redirect('/home');
            } else {
                res.redirect('/login');
            }
        }
    });
});

module.exports = router;
