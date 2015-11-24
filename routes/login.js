/**
 * Created by Administrator on 2015/11/20.
 */
var express = require('express');
var router = express.Router();
var ctrl = require('../controller/login_controller');

/* GET login page. */
router.route('/')
    .get(ctrl.load)
    .post(ctrl.login);


module.exports = router;
