/**
 * Created by Administrator on 2015/11/20.
 */
var express = require('express');
var router = express.Router();
var user_model = require('../routes/model');


/* GET login page. */
router.get('/', function (req, res, next) {
    if (req.session.islogin) {
        res.locals.islogin = req.session.islogin;
    }
    if (req.cookies.islogin) {
        req.session.islogin = req.cookies.islogin;
    }
    res.render('login', {title: 'LOGIN', test: res.locals.islogin});

}).post('/login_submit', function (req, res) {
    var username = req.body.username;
    user_model.getUser(username, function (err, doc) {
        var result = doc[0];
        if (result === undefined) {
            res.send('用户名无效');
        } else {
            if (result.password === req.body.password) {
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
