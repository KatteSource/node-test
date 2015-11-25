/**
 * Created by Administrator on 2015/11/24.
 */
var express = require('express');
var router = express.Router();
var ctrl = require('../controller/user_controller');
/**
 * URL routes:
 *
 *  GET    /users[/]        => user.list()
 *  GET    /users/new       => user.new()
 *  GET    /users/:id       => user.show()
 *  GET    /users/:id/edit  => user.edit()
 *  POST   /users[/]        => user.create()
 *  PATCH  /users/:id       => user.update()
 *  DELETE /users/:id       => user.destroy()
 *
 */
router.get('/new', ctrl.new);
router.get('/:id/edit', ctrl.edit);

router.route('/')
    .get(ctrl.list)
    .post(ctrl.add);

router.route('/:id')
    .post(ctrl.update)
    .get(ctrl.show);
    //.delete(ctrl.destroy);
router.route('/del/:id')
    .post(ctrl.destroy);
module.exports = router;