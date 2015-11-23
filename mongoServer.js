/**
 * Created by Administrator on 2015/11/23.
 */

//mongoDb  Êý¾Ý¿âÍÐ¹Ü :https://mongolab.com/databases/kattnode
var mongoose = require('mongoose');
exports.mongoose = mongoose;
exports.connection = mongoose.connect('mongodb://katt:xu_jiaxin1234@ds057254.mongolab.com:57254/kattnode');



