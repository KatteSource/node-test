/**
 * Created by Administrator on 2015/11/20.
 */
var express = require('express');
var router = express.Router();
var user_model = require('../routes/model');
//var usr = require('../serverConn');
/* GET reg page. */
router.get('/',function (req, res) {
    res.render('reg', {title: '注册Todo'});
})
.post('/reg_submit',function (req, res) {
        var username = req.body.username;
        var password = req.body.password;
        if(username&&password){
            user_model.getUser(username, function (err, doc) {
                var result = doc[0];
                console.log(typeof result);
                if(result!=="undefined"){
                    user_model.addUser(username,password,function(err){
                        req.session.islogin = req.body.username;
                        res.locals.islogin = req.session.islogin;
                        res.cookie('islogin', res.locals.islogin, {maxAge: 60000});
                        res.redirect('/home');
                    });
                }else{
                    res.send("该用户名已存在,请更改！");
                }
            });
        }else{
            res.send('用户名或密码不能为空！');
        }
});
module.exports = router;
