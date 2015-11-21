var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    if (req.cookies.islogin) {
        req.session.islogin = req.cookies.islogin;
    }
    if (req.session.islogin) {
        res.locals.islogin = req.session.islogin;
    }
    res.render('index', {title: '注册', test: res.locals.islogin});
});

router.get('/logout', function (req, res) {
    res.clearCookie('islogin');
    req.session.destroy();
    res.redirect('/');

});

router.get('/home', function (req, res) {
    if (req.session.islogin) {
        res.locals.islogin = req.session.islogin;
    }
    if (req.cookies.islogin) {
        req.session.islogin = req.cookies.islogin;
    }
    res.render('home', {title: '主页', user: res.locals.islogin}); });

module.exports = router;
