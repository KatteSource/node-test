var express = require('express');
var router = express.Router();


router.get('/', function (req, res) {
    res.render('index', {title: 'HOME', test: global.islogin});
});

router.get('/logout', function (req, res) {
    res.clearCookie('islogin');
    req.session.destroy();
    global.islogin=null;
    res.redirect('/');
});

module.exports = router;
