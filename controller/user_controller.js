/**
 * Created by Administrator on 2015/11/24.
 */

var User = require('../model/User');

//展示列表页
exports.list = function (req, res, next) {
    console.log(req.method + ' /User => list, query: ' + JSON.stringify(req.query));
    User.getAll(function (err, users) {
        console.log(users);
        res.render('User/index', {
            title: "index",
            users: users
        });
    });
};

//打开新页
exports.new = function (req, res, next) {
    console.log(req.method + ' /User/new => new, query: ' + JSON.stringify(req.query));
    res.render('User/new', {
        title:"添加",
        user: {
            "_action": "new"
        }
    })
};

//查看详细页
exports.show = function (req, res, next) {
    console.log(req.method + ' /User/:id => show, query: ' + JSON.stringify(req.query) +
        ', params: ' + JSON.stringify(req.params));
    var id = req.params.id;

    User.getById(id, function (err, user) {
        console.log(user);
        res.render('User/show', {
            title:"查看",
            user: user
        })
    });
};

//编辑页
exports.edit = function (req, res, next) {
    console.log(req.method + ' /User/:id/edit => edit, query: ' + JSON.stringify(req.query) +
        ', params: ' + JSON.stringify(req.params));

    var id = req.params.id;

    User.getById(id, function (err, user) {
        console.log(user);
        user._action = 'edit';
        res.render('User/edit', {
            title:"修改",
            user: user
        });
    });
};

//添加用户
exports.add = function (req, res, next) {
    console.log(req.method + ' /users => create, query: ' + JSON.stringify(req.query) +
        ', params: ' + JSON.stringify(req.params) + ', body: ' + JSON.stringify(req.body));
    User.create({username: req.body.username, password: req.body.password}, function (err, user) {
        console.log(user);
        res.render('User/show', {
            title:"查看",
            user: user
        });
    });
};

//修改用户
exports.update = function (req, res, next) {
    console.log(req.method + ' /User/:id => update, query: ' + JSON.stringify(req.query) +
        ', params: ' + JSON.stringify(req.params) + ', body: ' + JSON.stringify(req.body));

    var id = req.params.id;
    User.updateById(id, {username: req.body.username, password: req.body.password}, function (err, user) {
        console.log(user);
        //res.json({
        //    data: {
        //        redirect: '/User/' + id
        //    },
        //    status: {
        //        code: 0,
        //        msg: 'update success!'
        //    }
        //});
        res.redirect("/User",{
            title:"查看",
            user:user
        });
    });
};

//删除用户
exports.destroy = function (req, res, next) {
    console.log(req.method + ' /User/del/:id => destroy, query: ' + JSON.stringify(req.query) +
        ', params: ' + JSON.stringify(req.params) + ', body: ' + JSON.stringify(req.body));

    var id = req.params.id;
    User.deleteById(id, function (err) {
        console.log(err);
        res.json({
            data: {},
            status: {
                code: 0,
                msg: 'delete success!'
            }
        });
    });
};









