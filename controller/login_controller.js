/**
 * Created by iraxu on 2015/11/24.
 */

var User = require('../model/User');

//调试完成
exports.login = function (req, res, next) {
    var query = {"username": req.body.username}
    if (req.body.username && req.body.password) {
        User.one(query, function (err, doc) {
            console.log(doc);
            var result = doc;
            if (!result) {
                res.send('用户名无效');
            } else {
                if (result.password === req.body.password) {
                    req.session.islogin = req.body.username;
                    res.locals.islogin = req.session.islogin;
                    res.cookie('islogin', res.locals.islogin, {maxAge: 60000});
                    global.islogin = res.locals.islogin;
                    res.redirect('User');
                } else {
                    res.send("密码错误");
                }
            }
        });
    }
    else {
        res.send("用户名或密码不能为空");
    }

};

exports.load = function (req, res, next) {
    res.render('Login/login', {title: 'LOGIN', test: res.locals.islogin});
}
