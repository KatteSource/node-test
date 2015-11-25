/**
 * Created by Administrator on 2015/11/20.
 */
var express = require('express');
var router = express.Router();
var ctrl = require('../controller/register_controller')



router.route('/')
    .get(ctrl.load)
    .post(ctrl.register);

module.exports = router;
