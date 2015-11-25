/**
 * Created by iraxu on 2015/11/24.
 */

var User = require('../model/User');

//调试完成
exports.login = function (req, res, next) {
    var query = {"username": req.body.username}
    User.one(query, function (err, doc) {
        console.log(doc);
        var result = doc;
        if (result === undefined) {
            res.send('用户名无效');
        } else {
            if (result.password === req.body.password) {
                /*req.session.islogin = req.body.username;
                res.locals.islogin = req.session.islogin;
                res.cookie('islogin', res.locals.islogin, {maxAge: 60000});*/
                res.redirect('User');
            } else {
                res.redirect('Login/login');
            }
        }
    });
};

exports.load = function (req, res, next) {
    res.render('Login/login', {title: 'LOGIN', test: res.locals.islogin});
}


/*router.get('/', function (req, res, next) {
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
 });*/
