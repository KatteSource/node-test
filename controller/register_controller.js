/**
 * Created by Administrator on 2015/11/25.
 */


var User = require('../model/User');


exports.register = function(req,res,next){
    var username = req.body.username;
    var password = req.body.password;
    var query = {"username": username};
    if(username&&password){
        User.findOne(query,function(err,doc){
            var result =doc;
            if(!result){
                User.create({username: req.body.username, password: req.body.password}, function (err, user) {
                    req.session.islogin = req.body.username;
                    res.locals.islogin = req.session.islogin;
                    global.islogin = res.locals.islogin;
                    res.cookie('islogin', res.locals.islogin, {maxAge: 60000});
                    res.redirect('/');
                });
            }else{
                res.send("该用户名已存在,请更改！");
            }
        });
    }else{
        res.send('用户名或密码不能为空！');
    }
};


exports.load = function (req, res, next) {
    res.render('Login/reg', {title: 'REGISTER', test: res.locals.islogin});
};


